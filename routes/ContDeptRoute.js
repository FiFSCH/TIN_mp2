const express = require('express');
const router = express.Router();
const ContDeptController = require('../controllers/ContractDeptController');

router.get("/details/:IdCont", ContDeptController.showContDeptList);
router.get("/add", ContDeptController.showContDeptAdd);
router.get("/edit/:IdCont", ContDeptController.showContDeptEdit);

module.exports = router;