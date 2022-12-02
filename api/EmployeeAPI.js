const EmployeeRepository = require("../config/sequelize/repository/EmployeeRespository");

exports.getEmployees = (req, res, next) => {
    EmployeeRepository.getEmployees().then(emps => {
        res.status(200).json(emps);
    }).catch(err => {
        console.log(err);
    });
};
exports.getEmployeeById = (req, res, next) => {
    const empId = req.params.idEmployee;
    EmployeeRepository.getEmployeeById(empId).then(emp => {
        if (!emp) {
            res.status(404).json({message: 'Employee ' + empId + ' not found.'});
        } else {
            res.status(200).json(emp);
        }
    });
};

exports.createEmployee = (req, res, next) => {
    console.log(req.body);
    EmployeeRepository.createEmployee(req.body).then(newEmp => {
        res.status(201).json(newEmp);
    }).catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    });
};
exports.updateEmployee = (req, res, next) => {
    const empId = req.params.idEmployee;
    EmployeeRepository.updateEmployee(empId, req.body).then(result => {
        res.status(200).json({message: "Updated", emp: result});
    }).catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    });
};
exports.deleteEmployee = (req, res, next) => {
    const empId = req.params.idEmployee;
    EmployeeRepository.deleteEmployee(empId).then(result => {
        res.status(200).json({message: "Removed", emp: result});
    }).catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    });
};
