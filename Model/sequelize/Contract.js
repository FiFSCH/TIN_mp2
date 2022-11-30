const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize.js');

const Contract = sequelize.define('Contract', {
    idContract: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    startDate: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    dueDate: {
        type: Sequelize.DATE,
        allowNull: true,
    }
});
module.exports = Contract;