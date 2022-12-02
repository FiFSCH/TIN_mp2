const ContractDept = require('../../../Model/sequelize/Department_Contract');
const Contract = require('../../../Model/sequelize/Contract');

const sequelize = require("sequelize");

exports.getContracts = () => {
    return Contract.findAll();
};

exports.getContractById = (contId) => {
    return Contract.findByPk(contId, {
        Include: [{
            model: ContractDept,
            as: 'contracts',
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
    });
};
exports.updateCont = (contId, data) => {
    return Contract.update(data, {where: {idContract: contId}});
};
exports.deleteCont = (contId) => {
    return Contract.destroy({where: {idContract: contId}});
};