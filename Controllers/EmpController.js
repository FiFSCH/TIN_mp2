const EmpRepository = require("../config/sequelize/repository/EmployeeRespository");
exports.showEmpList = (req, res, next) => {
    return EmpRepository.getEmployees().then(emps => {
        res.render("pages/Emp/Employee", {
            emps: emps,
            navLocation: 'emp'
        });
    });
};
exports.showEmpDetails = (req, res, next) => {
    return res.render('pages/Emp/EmpDetails', {navLocation: 'emp'});
};
exports.showEmpAdd = (req, res, next) => {
    return res.render('pages/Emp/EmpAdd', {navLocation: 'emp'});
};
exports.showEmpEdit = (req, res, next) => {
    return res.render('pages/Emp/EmpEdit', {navLocation: 'emp'});
};
exports.showAddEmpForm = (req, res, next) => {
    return res.render('pages/Emp/form', {
        emp: {},
        pageTitle: 'New employee',
        formMode: 'CreateNew',
        btnLabel: 'Add new employee',
        formAction: '/employees/add',
        navLocation: 'emp'
    });
};
exports.showEditEmpForm = (req, res, next) => {
    const empId = req.params.IdEmp;
    return EmpRepository.getEmployeeById(empId).then(emp => {
        res.render("pages/Emp/form", {
            emp: emp,
            formMode: 'edit',
            pageTitle: 'Edit employee',
            btnLabel: 'Edit employee',
            formAction: '/employees/edit',
            navLocation: 'emp'
        });
    });
};
exports.showEmpDetailsForm = (req, res, next) => {
    const empId = req.params.IdEmp;
    return EmpRepository.getEmployeeById(empId).then(emp => {
        res.render("pages/Emp/form", {
            emp: emp,
            formMode: "showDetails",
            pageTitle: "Employee details",
            formAction: '',
            navLocation: 'emp'
        });
    });
};