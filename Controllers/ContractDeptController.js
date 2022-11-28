exports.showContDeptList = (req, res, next) => {
    return res.render('pages/ContractDept/Contract_dept' , {navLocation: 'cont'});
};
exports.showContDeptAdd = (req, res, next) => {
    return res.render('pages/ContractDept/DeptContAdd' , {navLocation: 'cont'});
};
exports.showContDeptEdit = (req, res, next) => {
    return res.render('pages/ContractDept/DeptContEdit' , {navLocation: 'cont'});
};