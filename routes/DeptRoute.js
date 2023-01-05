const express = require('express');
const router = express.Router();
const deptController = require('../controllers/DeptController');
const authUtil = require('../util/authUtils');


router.get("/", deptController.showDeptList);
router.get("/add", authUtil.permitAuthenticatedUser, deptController.showAddDeptForm);
router.get("/details/:IdDept", authUtil.permitAuthenticatedUser, deptController.showDetailsDeptForm);
router.get("/details/", deptController.redirectToList);
router.get("/edit/:IdDept", authUtil.permitAuthenticatedUser, deptController.showEditDeptForm);
router.post("/add", authUtil.permitAuthenticatedUser, deptController.addDept);
router.post("/edit", authUtil.permitAuthenticatedUser, deptController.editDept);
router.get("/delete/:IdDept", authUtil.permitAuthenticatedUser, deptController.deleteDept);

module.exports = router;