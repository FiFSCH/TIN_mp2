const DeptContRepository = require("../config/sequelize/repository/DeptContRepository");

exports.getDeptsContracts = (req, res, next) => {
    DeptContRepository.getDeptCons().then(deptsConts => {
        res.status(200).json(deptsConts);
    }).catch(err => {
        console.log(err);
    });
};
exports.getContractById = (req, res, next) => {
    const deptId = req.params.idDepartment;
    const contId = req.params.idContract;

    DeptContRepository.getDeptContById(deptId, contId).then(deptCont => {
        if (!deptCont) {
            res.status(404).json({message: 'not found.'});
        } else {
            res.status(200).json(deptCont);
        }
    });
};

exports.createDeptCont = (req, res, next) => {
    console.log(req.body);
    DeptContRepository.createDeptCont(req.body).then(newDeptCont => {
        res.status(201).json(newDeptCont);
    }).catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    });
};
exports.updateDeptCont = (req, res, next) => {
    const contId = req.params.idContract;
    const deptId = req.params.idDepartment;
    DeptContRepository.updateDeptContCont(deptId,contId, req.body).then(result => {
        res.status(200).json({message: "Updated", contract: result});
    }).catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    });
};
exports.deleteDeptCont = (req, res, next) => {
    const contId = req.params.idContract;
    const deptId = req.params.idDepartment;
    DeptContRepository.deleteDeptCont(deptId,contId).then(result => {
        res.status(200).json({message: "Removed", deptCont: result});
    }).catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    });
};
