exports.showContDeptList = (req, res, next) => {
    return res.render('pages/ContractDept/Contract_dept');
};
exports.showContDeptAdd = (req, res, next) => {
    return res.render('pages/ContractDept/DeptContAdd');
};
exports.showContDeptEdit = (req, res, next) => {
    return res.render('pages/ContractDept/DeptContEdit');
};