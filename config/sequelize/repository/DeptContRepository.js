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
exports.getContsByDept = (deptId) => {
    return DeptCont.findAll({
        where: {
            idDepartment: deptId
        }
    });
};

exports.getDeptsByCont = (contId) => {
    return DeptCont.findAll({
        where: {
            idContract: contId
        }
    });
};

exports.createDeptCont = (idCont, data) => {
    console.log('DEPT CONT REPO! ',JSON.stringify(data));
    if (idCont !== -1) {
        console.log("It is -1")
        return DeptCont.create({
            idDepartment: data.IdDept,
            idContract: idCont
        });
    }
    return DeptCont.create({
        idDepartment: data.deptContName,
        idContract: data.idContract
    });
};
exports.updateDeptCont = (deptId, contId,data) => {
    return DeptCont.update({
        idDepartment: data.IdDept,
    }, {
        where: {
            idContract: contId
        }
    });
};
exports.deleteDeptCont = (deptId, contId) => {
    return DeptCont.destroy({
        where: {
            idDepartment: deptId,
            idContract: contId
        }
    });
};