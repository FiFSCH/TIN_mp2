const DeptRepository = require('../config/sequelize/repository/DepartmentRepository');
const DeptContRepository = require('../config/sequelize/repository/DeptContRepository');
const ContRepository = require('../config/sequelize/repository/ContractRepository');

exports.showDeptList = (req, res, next) => {
    return DeptRepository.getDepartments().then(depts => {
        res.render('pages/Dept/Department', {
            depts: depts,
            navLocation: 'dept'
        });
    });
};

exports.showAddDeptForm = (req, res, next) => {
    return res.render('pages/Dept/form', {
        dept: {},
        pageTitle: 'New department',
        formMode: 'createNew',
        btnLabel: 'Add department',
        formAction: '/departments/add',
        navLocation: 'dept',
        validationErrors: []
    });
};
exports.showEditDeptForm = (req, res, next) => {
    const deptId = req.params.IdDept;
    return DeptRepository.getDepartmentById(deptId).then(dept => {
        res.render('pages/Dept/form', {
            dept: dept,
            pageTitle: 'Edit department',
            formMode: 'edit',
            btnLabel: 'Edit department',
            formAction: "/departments/edit",
            navLocation: 'dept',
            validationErrors: []
        });
    });
};
exports.showDetailsDeptForm = (req, res, next) => {
    const deptId = req.params.IdDept;
    return DeptRepository.getDepartmentById(deptId).then(dept => {
        res.render('pages/Dept/form', {
            dept: dept,
            contracts: dept.contracts,
            pageTitle: 'Department details',
            formMode: 'showDetails',
            formAction: "",
            navLocation: 'dept',
            validationErrors: []
        });
    });
};

exports.addDept = (req, res, next) => {
    const deptData = {...req.body};
    return DeptRepository.createDept(deptData).then(result => {
        res.redirect("/departments");
    }).catch(err => {
        res.render('pages/Dept/form', {
            dept: {},
            pageTitle: 'New department',
            formMode: 'createNew',
            btnLabel: 'Add department',
            formAction: '/departments/add',
            navLocation: 'dept',
            validationErrors: err.errors
        });
    });
};
exports.editDept = (req, res, next) => {
    const deptId = req.body.IdDept;
    let tmp;
    const deptData = {...req.body};
    return DeptRepository.getDepartmentById(deptId).then(returned => {
        tmp = returned;
        return DeptRepository.updateDept(deptId, deptData).then(result => {
            res.redirect("/departments");
        }).catch(err => {
            console.log(tmp);
            res.render('pages/Dept/form', {
                dept: tmp,
                pageTitle: 'Edit department',
                formMode: 'edit',
                btnLabel: 'Edit department',
                formAction: "/departments/edit",
                navLocation: 'dept',
                validationErrors: err.errors
            });
        });
    });
};

exports.deleteDept = (req, res, next) => {
    const deptId = req.params.IdDept;
    return DeptRepository.deleteDept(deptId).then(result => {
        res.redirect("/departments");
    });
};
exports.redirectToList = (req, res, next) => {
    return res.redirect('/departments');
};