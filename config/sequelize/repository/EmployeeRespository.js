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
        firstName: data.firstName,
        lastName: data.lastName,
        dateFrom: sequelize.NOW,
        dateTo: null,
        phoneNumber: data.phoneNumber,
        email: data.email,
        supervisedBy: data.supervisedBy,
        idDepartment: data.idDepartment
    });
};
exports.updateEmployee = (idEmp, data) => {
    const firstName = data.firstName;
    const lastName = data.lastName
    const dateFrom = data.dateFrom
    const dateTo = data.dateTo
    const phoneNumber = data.phoneNumber
    const email = data.email
    const supervisedBy = data.supervisedBy
    const idDepartment = data.idDepartment
    return Employee.update(data, {where: {idEmployee: idEmp}});
};
exports.deleteEmployee = (idEmp) => {
    return Employee.destroy({where: {idEmployee: idEmp}});
};
