const EmpRepository = require("../config/sequelize/repository/EmployeeRespository");
const DeptRepository = require("../config/sequelize/repository/DepartmentRepository");
exports.showEmpList = (req, res, next) => {
    return EmpRepository.getEmployees().then(emps => {
        res.render("pages/Emp/Employee", {
            emps: emps,
            navLocation: 'emp'
        });
    });
};

exports.showAddEmpForm = (req, res, next) => {
    let allEmps;
    return EmpRepository.getEmployees().then(emps => {
        allEmps = emps;
        return DeptRepository.getDepartments();
    }).then(depts => {
        return res.render('pages/Emp/form', {
            emp: {},
            emps: allEmps,
            depts: depts,
            pageTitle: 'New employee',
            formMode: 'CreateNew',
            btnLabel: 'Add new employee',
            formAction: '/employees/add',
            navLocation: 'emp',
            validationErrors: []
        });
    });
};
exports.showEditEmpForm = (req, res, next) => {
    const empId = req.params.IdEmp;
    let allEmps, emp;
    return EmpRepository.getEmployeeById(empId).then(res => {
        emp = res;
        return EmpRepository.getEmployees();
    }).then(emps => {
        allEmps = emps;
        return DeptRepository.getDepartments();
    }).then(depts => {
        return res.render("pages/Emp/form", {
            emp: emp,
            emps: allEmps,
            depts: depts,
            formMode: "edit",
            pageTitle: "Edit employee",
            btnLabel: 'Edit employee',
            formAction: '/employees/edit',
            navLocation: 'emp',
            validationErrors: []
        });
    });
};
exports.showEmpDetailsForm = (req, res, next) => {
    const empId = req.params.IdEmp;
    let emp, sup;
    return EmpRepository.getEmployeeById(empId).then(res => {
        emp = res;
        return EmpRepository.getEmployeeById(res.supervisedBy);
    }).then(tmpSup => {
        sup = tmpSup;
        return DeptRepository.getDepartmentById(emp.idDepartment);
    }).then(dept => {
        res.render("pages/Emp/form", {
            emp: emp,
            department: (dept == null || dept == '') ? '' : dept,
            supervisor: (sup == null || sup == '') ? '' : sup,
            formMode: "showDetails",
            pageTitle: "Employee details",
            formAction: '',
            navLocation: 'emp',
            validationErrors: []
        });
    });
};
exports.addEmp = (req, res, next) => {
    const empData = {...req.body};
    let allEmps, allDepts;
    return EmpRepository.getEmployees()
        .then(emps => {
            allEmps = emps;
            return DeptRepository.getDepartments();
        }).then(depts => {
            allDepts = depts;
            return EmpRepository.createEmployee(empData);
        }).then(result => {
            res.redirect('/employees');
        }).catch(err => {
            return res.render('pages/Emp/form', {
                emp: {},
                emps: allEmps,
                depts: allDepts,
                pageTitle: 'New employee',
                formMode: 'CreateNew',
                btnLabel: 'Add new employee',
                formAction: '/employees/add',
                navLocation: 'emp',
                validationErrors: err.errors
            });
        });
};
// return EmpRepository.getEmployeeById(empId).then(res => {
//     emp = res;
//     return EmpRepository.getEmployees();
// }).then(emps => {
//     allEmps = emps;
//     return DeptRepository.getDepartments();
// }).then(depts => {
//     return res.render("pages/Emp/form", {
exports.updateEmp = (req, res, next) => {
    let allEmps, allDepts, emp;
    const empId = req.body.empId;
    const empData = {...req.body};
    // return EmpRepository.updateEmployee(empId, empData).then(result => {
    //     res.redirect('/employees');
    // })
    return EmpRepository.getEmployeeById(empId).then(tmp => {
        emp = tmp;
        return EmpRepository.getEmployees();
    }).then(emps => {
        allEmps = emps;
        return DeptRepository.getDepartments();
    }).then(depts => {
        allDepts = depts;
        return EmpRepository.updateEmployee(empId, empData).then(result => {
            res.redirect('/employees');
        }).catch(err => {
            res.render("pages/Emp/form", {
                emp: emp,
                emps: allEmps,
                depts: allDepts,
                formMode: "edit",
                pageTitle: "Edit employee",
                btnLabel: 'Edit employee',
                formAction: '/employees/edit',
                navLocation: 'emp',
                validationErrors: err.errors
            });
        });
    });
};
exports.deleteEmp = (req, res, next) => {
    const empId = req.params.IdEmp;
    return EmpRepository.deleteEmployee(empId).then(result => {
        res.redirect('/employees');
    });
};
exports.redirectToList = (req, res, next) => {
    return res.redirect('/employees');
};