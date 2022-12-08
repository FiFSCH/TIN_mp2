const express = require('express');
const router = express.Router();
const deptController = require('../controllers/DeptController');


router.get("/", deptController.showDeptList);
router.get("/add", deptController.showAddDeptForm);
router.get("/details/:IdDept", deptController.showDetailsDeptForm);
router.get("/details/", deptController.redirectToList);
router.get("/edit/:IdDept", deptController.showEditDeptForm);
router.post("/add", deptController.addDept);
router.post("/edit", deptController.editDept);
router.get("/delete/:IdDept", deptController.deleteDept);

module.exports = router;