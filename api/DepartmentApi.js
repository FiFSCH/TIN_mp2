const DepartmentRepository = require("../config/sequelize/repository/DepartmentRepository");

exports.getDepartments = (req, res, next) => {
    DepartmentRepository.getDepartments().then(depts => {
        res.status(200).json(depts);
    }).catch(err => {
        console.log(err);
    });
};

exports.getDepartmentById = (req, res, next) => {
    console.log(req.params.idDepartment);
    const deptId = req.params.idDepartment;
    DepartmentRepository.getDepartmentById(deptId).then(dept => {
        if (!dept) {
            res.status(400).json({message: 'Department ' + deptId + ' not found.'});
        } else {
            res.status(200).json(dept);
        }
    });
};

exports.createDepartment = (req, res, next) => {
    console.log(req.body);
    DepartmentRepository.createDept(null,req.body).then(newDept =>{
        res.status(201).json(newDept);
    }).catch(err=>{
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    });
};
exports.updateDepartment = (req, res, next) => {
    const deptId = req.params.idDepartment;
    DepartmentRepository.updateDept(deptId, req.body).then(result => {
        res.status(200).json({message: "Updated", dept: result});
    }).catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    });
};

exports.deleteDepartment = (req, res, next) => {
    const deptId = req.params.idDepartment;
    DepartmentRepository.deleteDept(deptId).then(result => {
        res.status(200).json({message: "Removed", dept: result});
    }).catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    });
};
