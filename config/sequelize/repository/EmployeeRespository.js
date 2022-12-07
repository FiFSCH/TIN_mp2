const Employee = require('../../../Model/sequelize/Employee');
const Department = require('../../../Model/sequelize/Department');
const sequelize = require("sequelize");

exports.getEmployees = () => {
    return Employee.findAll();
};

exports.getEmployeeById = (empID) => {
    return Employee.findByPk(empID, {
        include: [{
            model: Employee,
            as: 'supervised_by'
        },
            {
                model: Department,
                as: 'worksIn'
            }]
    });
};

exports.createEmployee = (data) => {
    console.log(JSON.stringify(data));
    return Employee.create({
        firstName: data.fname,
        lastName: data.lname,
        dateFrom: data.employedFrom,
        dateTo: (data.employedTo == '') ? null : data.employedTo,
        phoneNumber: data.phone,
        email: data.email,
        supervisedBy: (data.supervisor == '' || data.supervisor == ' ') ? null : data.supervisor,
        idDepartment: data.dept
    });
};
exports.updateEmployee = (idEmp, data) => {
    return Employee.update({
        firstName: data.fname,
        lastName: data.lname,
        dateFrom: data.employedFrom,
        dateTo: (data.employedTo == '') ? null : data.employedTo,
        phoneNumber: data.phone,
        email: data.email,
        supervisedBy: (data.supervisor == '') ? null : data.supervisor.idEmployee,
        idDepartment: data.dept
    }, {where: {idEmployee: idEmp}});
};
exports.deleteEmployee = (idEmp) => {
    return Employee.destroy({where: {idEmployee: idEmp}});
};
