const express = require('express');
const router = express.Router();
const contApi = require("../../api/ContractApi");
const isAuth = require('../../middleware/isAuth');

router.get('/', isAuth, contApi.getContracts);
router.get('/:idContract', isAuth, contApi.getContractById);
router.post('/', isAuth, contApi.createContract);
router.put('/:idContract', isAuth, contApi.updateContract);
router.delete('/:idContract', isAuth, contApi.deleteContract);

module.exports = router;