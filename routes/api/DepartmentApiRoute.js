const express = require('express');
const router = express.Router();
const deptApi = require("../../api/DepartmentApi");
const isAuth = require("../../middleware/isAuth");

router.get('/', deptApi.getDepartments);
router.get('/:idDepartment', isAuth, deptApi.getDepartmentById);
router.post('/', isAuth, deptApi.createDepartment);
router.put('/:idDepartment', isAuth, deptApi.updateDepartment);
router.delete('/:idDepartment', isAuth, deptApi.deleteDepartment);

module.exports = router;