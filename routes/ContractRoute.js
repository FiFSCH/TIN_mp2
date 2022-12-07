const express = require('express');
const router = express.Router();
const ContController = require('../controllers/ContractController');

router.get("/", ContController.showContList);

module.exports = router;