const Contract = require('../../../Model/sequelize/Contract');
const Department = require('../../../Model/sequelize/Department');
const DeptCont = require('./DeptContRepository');

const sequelize = require("sequelize");
const Cont = require("../../../Model/sequelize/Contract");

exports.getDepartments = () => {
    return Department.findAll();
};

exports.getDepartmentById = (deptId) => {
    return Department.findByPk(deptId, {
        include: [{
            model: Contract,
            as: 'contracts',
        }]
    })
};

exports.createDept = (data) => {
    console.log('repository ', data)
    return Department.create({
        name: data.name,
        location: data.location
    });
};
exports.updateDept = (idDept, data) => {
    return Department.update(data, {where: {idDepartment: idDept}});
};
exports.deleteDept = (idDept) => {
    return Department.destroy({where: {idDepartment: idDept}});
};
