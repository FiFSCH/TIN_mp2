const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/EmpController');

router.get("/", employeeController.showEmpList);
router.get("/add", employeeController.showEmpAdd);
router.get("/details/:IdEmp", employeeController.showEmpDetails);
router.get("/edit/:IdEmp", employeeController.showEmpEdit);

module.exports = router;