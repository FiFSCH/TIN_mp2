const express = require('express');
const router = express.Router();
const ContDeptController = require('../controllers/ContractController');

router.get("/", ContDeptController.showContList);

module.exports = router;