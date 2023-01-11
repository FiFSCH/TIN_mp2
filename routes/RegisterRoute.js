const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/EmpController');

router.get("/add", employeeController.register);

module.exports = router;