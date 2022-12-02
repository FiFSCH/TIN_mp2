const express = require('express');
const router = express.Router();
const empApi = require("../../api/EmployeeAPI");

router.get('/', empApi.getEmployees);
router.get('/:idEmployee', empApi.getEmployeeById);
router.post('/', empApi.createEmployee);
router.put('/:idEmployee', empApi.updateEmployee);
router.delete('/:idEmployee', empApi.deleteEmployee);

module.exports = router;