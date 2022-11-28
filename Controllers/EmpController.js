exports.showEmpList = (req, res, next) => {
    return res.render('pages/Emp/Employee', {navLocation: 'emp'});
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