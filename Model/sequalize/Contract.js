const Sequalize = require('sequelize');
const sequalize = require('../../config/sequalize/sequalize.js');

const Contract = sequalize.define('Contract',{
    idContract:{
        type: Sequalize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    description: {
        type: Sequalize.STRING,
        allowNull: false,
    },
    startDate: {
        type: Sequalize.DATE,
        allowNull: false,
    },
    dueDate: {
        type: Sequalize.DATE,
        allowNull: true,
    }
});
module.exports = Contract;