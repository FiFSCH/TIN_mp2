const express = require('express');
const router = express.Router();
const deptApi = require("../../api/DepartmentApi");

router.get('/', deptApi.getDepartments);
router.get('/:idDepartment', deptApi.getDepartmentById);
router.post('/', deptApi.createDepartment);
router.put('/:idDepartment', deptApi.updateDepartment);
router.delete('/:idDepartment', deptApi.deleteDepartment);

module.exports = router;