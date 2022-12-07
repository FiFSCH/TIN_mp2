const ContractRepository = require('../config/sequelize/repository/ContractRepository');
exports.showContList = (req, res, next) => {
    return ContractRepository.getContracts().then(
        conts => {
            res.render('pages/Contract/Contract',{
                conts: conts,
                navLocation: 'cont'
            });
        }
    );
};

