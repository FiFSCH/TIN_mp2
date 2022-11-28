const express = require('express');
const router = express.Router();
const deptController = require('../controllers/DeptController');

router.get("/", deptController.showDeptList);
router.get("/add", deptController.showDeptAdd);
router.get("/details/:IdEmp:", deptController.showDeptDetails);
router.get("/edit/:IdEmp:", deptController.showDeptEdit);

module.exports = router;