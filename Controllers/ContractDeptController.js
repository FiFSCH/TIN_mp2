const ContRepository = require('../config/sequelize/repository/ContractRepository');
const DeptContRepository = require('../config/sequelize/repository/DeptContRepository');
const DeptRepository = require('../config/sequelize/repository/DepartmentRepository');
exports.showAddContDeptForm = (req, res, next) => {
    let allDepts;
    return DeptRepository.getDepartments().then(depts => {
        allDepts = depts;
        res.render('pages/ContractDept/form', {
            deptCont: {},
            departments: allDepts,
            pageTitle: req.__('cont.form.add.pageTitle'),
            formMode: 'createNew',
            btnLabel: req.__('cont.form.add.btnLabel'),
            formAction: '/contracts_departments/add',
            navLocation: 'cont',
            validationErrors: []
        });
    })
};
exports.showEditContDeptForm = (req, res, next) => {
    let allDepts;
    const deptContId = req.params.IdCont;

    return DeptRepository.getDepartments().then(depts => {
        allDepts = depts;
        return ContRepository.getContractById(deptContId);
    }).then(deptCont => {
        res.render('pages/ContractDept/form', {
            deptCont: deptCont,
            departments: allDepts,
            formMode: 'edit',
            pageTitle: req.__('cont.form.edit.pageTitle'),
            btnLabel: req.__('cont.form.edit.btnLabel'),
            formAction: '/contracts_departments/edit',
            navLocation: 'cont',
            validationErrors: []
        });
    });
};
exports.showDetailsContDeptForm = (req, res, next) => {
    const deptContId = req.params.IdCont;
    return ContRepository.getContractById(deptContId).then(deptCont => {
        res.render('pages/ContractDept/form', {
            deptCont: deptCont,
            departments: deptCont.departments,
            formMode: 'showDetails',
            pageTitle: req.__('cont.form.details.pageTitle'),
            formAction: '',
            navLocation: 'cont',
            validationErrors: []
        });
    });
};
exports.addContract = (req, res, next) => {
    const contData = {...req.body};
    let allDepts;
    return DeptRepository.getDepartments().then(depts => {
        allDepts = depts;
        return ContRepository.createCont(contData).then(result => {
            res.redirect('/contracts');
        }).catch(err => {
            res.render('pages/ContractDept/form', {
                deptCont: {},
                departments: allDepts,
                pageTitle: req.__('cont.form.add.pageTitle'),
                formMode: 'createNew',
                btnLabel: req.__('cont.form.add.btnLabel'),
                formAction: '/contracts_departments/add',
                navLocation: 'cont',
                validationErrors: err.errors
            });
        });
    });
};
exports.editContract = (req, res, next) => {
    const contId = req.body.IdCont;
    const contData = {...req.body};
    let allDepts, deptCont;
    return DeptRepository.getDepartments().then(depts => {
        allDepts = depts;
        return ContRepository.getContractById(contId);
    }).then(cont => {
        deptCont = cont;
        return ContRepository.updateCont(contId, contData).then(result => {
            res.redirect('/contracts');
        }).catch(err => {
            res.render('pages/ContractDept/form', {
                deptCont: deptCont,
                departments: allDepts,
                formMode: 'edit',
                pageTitle: req.__('cont.form.edit.pageTitle'),
                btnLabel: req.__('cont.form.edit.btnLabel'),
                formAction: '/contracts_departments/edit',
                navLocation: 'cont',
                validationErrors: err.errors
            });
        });
    })
};
exports.deleteContract = (req, res, next) => {
    return ContRepository.deleteCont(req.params.IdCont).then(result => {
        res.redirect('/contracts');
    });
};