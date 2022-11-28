exports.showDeptList = (req, res, next) => {
    return res.render('pages/Dept/Department', {navLocation: 'dept'});
};
exports.showDeptDetails = (req, res, next) => {
    return res.render('pages/Dept/DeptDetails', {navLocation: 'dept'});
};
exports.showDeptAdd = (req, res, next) => {
    return res.render('pages/Dept/DeptAdd', {navLocation: 'dept'});
};
exports.showDeptEdit = (req, res, next) => {
    return res.render('pages/Dept/DeptEdit', {navLocation: 'dept'});
};