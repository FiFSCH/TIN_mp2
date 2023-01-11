const express = require('express');
const router = express.Router();
const empApi = require("../../api/EmployeeAPI");
const isAuth = require('../../middleware/isAuth');

router.get('/', isAuth, empApi.getEmployees);
router.get('/:idEmployee', isAuth, empApi.getEmployeeById);
router.post('/', isAuth, empApi.createEmployee);
router.put('/:idEmployee', isAuth, empApi.updateEmployee);
router.delete('/:idEmployee', isAuth, empApi.deleteEmployee);

module.exports = router;