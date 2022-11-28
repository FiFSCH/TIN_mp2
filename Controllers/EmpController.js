exports.showEmpList = (req, res, next) => {
    return res.render('pages/Emp/Employee', {});
};
exports.showEmpDetails = (req, res, next) => {
    return res.render('pages/Emp/EmpDetails', {});
};
exports.showEmpAdd = (req, res, next) => {
    return res.render('pages/Emp/EmpAdd', {});
};
exports.showEmpEdit = (req, res, next) => {
    return res.render('pages/Emp/EmpEdit', {});
};