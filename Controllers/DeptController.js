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
        navLocation: 'dept'
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
            navLocation: 'dept'
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
            navLocation: 'dept'
        });
    });
};

exports.addDept = (req, res, next) => {
    const deptData = {...req.body};
    return DeptRepository.createDept(deptData).then(result => {
        res.redirect("/departments");
    });
};
exports.editDept = (req, res, next) => {
    const deptId = req.body.IdDept;
    const deptData = {...req.body};
    return DeptRepository.updateDept(deptId,deptData).then(result => {
        res.redirect("/departments");
    });
};
exports.deleteDept = (req, res, next) => {
    const deptId = req.params.IdDept;
    return DeptRepository.deleteDept(deptId).then(result => {
        res.redirect("/departments");
    });
};
