const ContractDept = require('../../../Model/sequelize/Department_Contract');
const Department = require('../../../Model/sequelize/Department');

const sequelize = require("sequelize");

exports.getDepartments = () => {
    return Department.findAll();
};

exports.getDepartmentById = (deptId) => {
    return Department.findByPk(deptId, {
        Include: [{
            model: ContractDept,
            as: 'departments',
        }]
    })
};

exports.createDept = (data) => {
    console.log(JSON.stringify(data));
    return Department.create({
        name: data.name,
        location: data.location
    });
};
exports.updateDept = (idDept, data) => {
    // const name = data.name;
    // const loc = data.location;
    return Department.update(data, {where: {idDepartment: idDept}});
};
exports.deleteDept = (idDept) => {
    return Department.destroy({where: {idDepartment: idDept}});
};
