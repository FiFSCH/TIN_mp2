const express = require('express');
const router = express.Router();
const contApi = require("../../api/ContractApi");

router.get('/', contApi.getContracts);
router.get('/:idContract', contApi.getContractById);
router.post('/', contApi.createContract);
router.put('/:idContract', contApi.updateContract);
router.delete('/:idContract', contApi.deleteContract);

module.exports = router;