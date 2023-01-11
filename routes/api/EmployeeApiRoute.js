const express = require('express');
const router = express.Router();
const empApi = require("../../api/EmployeeAPI");
const isAuth = require('../../middleware/isAuth');

router.get('/', empApi.getEmployees);
router.get('/:idEmployee', empApi.getEmployeeById);
router.post('/', empApi.createEmployee);
router.put('/:idEmployee', empApi.updateEmployee);
router.delete('/:idEmployee', isAuth,empApi.deleteEmployee);

module.exports = router;