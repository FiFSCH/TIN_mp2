const Employee = require('../../../Model/sequelize/Employee');
const Department = require('../../../Model/sequelize/Department');
const sequelize = require("sequelize");
const authUtil = require('../../../util/authUtils');

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
        password: authUtil.hashPassword(data.password),
        supervisedBy: (data.supervisors == '' || data.supervisors == ' ') ? null : data.supervisors,
        idDepartment: data.departments
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
        password: authUtil.hashPassword(data.password),
        supervisedBy: (data.supervisors == '') ? null : data.supervisors,
        idDepartment: data.departments
    }, {where: {idEmployee: idEmp}});
};
exports.deleteEmployee = (idEmp) => {
    return Employee.destroy({where: {idEmployee: idEmp}});
};

exports.findByEmail = (email) => {
    return Employee.findOne({where: {email: email}});
};
