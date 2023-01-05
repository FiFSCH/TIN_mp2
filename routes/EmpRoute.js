const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/EmpController');

router.get("/", employeeController.showEmpList);
router.get("/add", employeeController.showAddEmpForm);
router.get("/details/:IdEmp", employeeController.showEmpDetailsForm);
router.get("/details/", employeeController.redirectToList);
router.get("/edit/:IdEmp", employeeController.showEditEmpForm);
router.post('/add', employeeController.addEmp);
router.post('/edit',employeeController.updateEmp);
router.get("/delete/:IdEmp", employeeController.deleteEmp);

module.exports = router;