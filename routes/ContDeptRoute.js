const express = require('express');
const router = express.Router();
const ContDeptController = require('../controllers/ContractDeptController');

router.get("/add", ContDeptController.showAddContDeptForm);
router.get("/edit/:IdCont", ContDeptController.showEditContDeptForm);
router.get("/details/:IdCont", ContDeptController.showDetailsContDeptForm);
router.post('/add',ContDeptController.addContract);
router.post('/edit',ContDeptController.editContract);
router.get('/delete/:IdCont', ContDeptController.deleteContract);

module.exports = router;