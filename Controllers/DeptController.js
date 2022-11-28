exports.showDeptList = (req, res, next) => {
    return res.render('pages/Dept/Department');
};
exports.showDeptDetails = (req, res, next) => {
    return res.render('pages/Dept/DeptDetails');
};
exports.showDeptAdd = (req, res, next) => {
    return res.render('pages/Dept/DeptAdd');
};
exports.showDeptEdit = (req, res, next) => {
    return res.render('pages/Dept/DeptEdit');
};