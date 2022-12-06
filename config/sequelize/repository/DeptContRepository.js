const DeptCont = require('../../../Model/sequelize/Department_Contract');


const sequelize = require("sequelize");

exports.getDeptCons = () => {
    return DeptCont.findAll();
};

exports.getDeptContById = (deptId, contId) => {
    return DeptCont.findOne({
        where: {
            idDepartment: deptId,
            idContract: contId
        }
    });
};

exports.createDeptCont = (idCont,data) => {
    console.log(JSON.stringify(data));
    if(idCont !== -1){
        return DeptCont.create({
            idDepartment: data.deptContName,
            idContract: idCont
        });
    }
    return DeptCont.create({
        idDepartment: data.deptContName,
        idContract: data.idContract
    });
};
exports.updateDeptContCont = (deptId, contId, data) => {
    return DeptCont.update(data, {
        where: {
            idDepartment: deptId,
            idContract: contId
        }
    });
};
exports.deleteDeptCont = (deptId, contId) => {
    return DeptCont.destroy({where: {
            idDepartment: deptId,
            idContract: contId
        }});
};