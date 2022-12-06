const ContractRepository = require("../config/sequelize/repository/ContractRepository");


exports.getContracts = (req, res, next) => {
    ContractRepository.getContracts().then(conts => {
        res.status(200).json(conts);
    }).catch(err => {
        console.log(err);
    });
};
exports.getContractById = (req, res, next) => {
    const contId = req.params.idContract;
    ContractRepository.getContractById(contId).then(cont => {
        if (!cont) {
            res.status(404).json({message: 'Contract ' + contId + ' not found.'});
        } else {
            res.status(200).json(cont);
        }
    });
};

exports.createContract = (req, res, next) => {
    console.log(req.body);
    ContractRepository.createCont(req.body).then(newCont => {
        res.status(201).json(newCont);
    }).catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    });
};
exports.updateContract = (req, res, next) => {
    const contId = req.params.idContract;
    ContractRepository.updateCont(contId, req.body).then(result => {
        res.status(200).json({message: "Updated", contract: result});
    }).catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    });
};
exports.deleteContract = (req, res, next) => {
    const contId = req.params.idContract;
    ContractRepository.deleteCont(contId).then(result => {
        res.status(200).json({message: "Removed", contract: result});
    }).catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    });
};
