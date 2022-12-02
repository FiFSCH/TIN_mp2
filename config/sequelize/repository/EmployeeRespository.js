const Employee = require('../../../Model/sequelize/Employee');
const Department = require('../../../Model/sequelize/Department');
const sequelize = require("sequelize");

exports.getEmployees = () => {
    return Employee.findAll();
};

exports.getEmployeeById = (empID) => {
    return Employee.findByPk(empID, {
        Include: [{
            model: Employee,
            as: 'supervisor',
            include: [{
                model: Department,
                as: 'worksIn'
            }]
        }]
    })
};

exports.createEmployee = (data) => {
    console.log(JSON.stringify(data));
    return Employee.create({
        firstName: data.fname,
        lastName: data.lname,
        dateFrom: new Date(),
        dateTo: null,
        phoneNumber: data.phone,
        email: data.email,
        supervisedBy: data.supervisor,
        idDepartment: data.dept
    });
};
exports.updateEmployee = (idEmp, data) => {
    return Employee.update(data, {where: {idEmployee: idEmp}});
};
exports.deleteEmployee = (idEmp) => {
    return Employee.destroy({where: {idEmployee: idEmp}});
};
