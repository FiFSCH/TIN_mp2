const Contract = require('../../../Model/sequelize/Contract');
const Department = require('../../../Model/sequelize/Department');

const sequelize = require("sequelize");
const DeptContRepository = require("./DeptContRepository");
const ContRepository = require("./ContractRepository");

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
    DeptContRepository.getContsByDept(idDept).then(res => {for(let i = 0; i< res.length; i++){
        ContRepository.deleteCont(res[i].dataValues.idContract);
    }});
    return Department.destroy({where: {idDepartment: idDept}});
};
