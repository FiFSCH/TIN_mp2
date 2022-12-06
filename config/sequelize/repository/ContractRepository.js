const Department = require('../../../Model/sequelize/Department');
const Contract = require('../../../Model/sequelize/Contract');
const DeptContRepository = require("../../../config/sequelize/repository/DeptContRepository");


const sequelize = require("sequelize");

exports.getContracts = () => {
    return Contract.findAll();
};

exports.getContractById = (contId) => {
    return Contract.findByPk(contId, {
        include: [{
            model: Department,
            as: 'departments',
        }]
    })
};

exports.createCont = (data) => {
    console.log(JSON.stringify(data));
    return Contract.create({
        description: data.desc,
        startDate: data.startDate,
        dueDate: data.dueDate,
        respDept: data.deptContName
    }).then(res =>{
        DeptContRepository.createDeptCont(res.idContract,data);
    });
};
exports.updateCont = (contId, data) => {
    DeptContRepository.updateDeptContCont(contId,data.deptContName,data);
    return Contract.update(data, {where: {idContract: contId}})
};
exports.deleteCont = (contId) => {
    return Contract.destroy({where: {idContract: contId}});
};