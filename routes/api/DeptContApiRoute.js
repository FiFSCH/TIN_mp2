const express = require('express');
const router = express.Router();
const deptContApi = require("../../api/DeptContApi");

router.get('/', deptContApi.getDeptsContracts);
router.get('/:idDepartment/:idContract', deptContApi.getContractById);
router.post('/', deptContApi.createDeptCont);
router.put('/:idDepartment/:idContract', deptContApi.updateDeptCont);
router.delete('/:idDepartment/:idContract', deptContApi.deleteDeptCont);

module.exports = router;