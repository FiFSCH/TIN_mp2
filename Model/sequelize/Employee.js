const Sequalize = require('sequelize');
const sequalize = require('../../config/sequelize/sequelize.js');

const Employee = sequalize.define('Employee', {
    idEmployee: {
        type: Sequalize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    firstName: {
        type: Sequalize.STRING,
        allowNull: false,
    },
    lastName: {
        type: Sequalize.STRING,
        allowNull: false,
    },
    dateFrom: {
        type: Sequalize.DATE,
        allowNull: false,
    },
    dateTo: {
        type: Sequalize.DATE,
        allowNull: true,
    },
    phoneNumber: {
        type: Sequalize.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: Sequalize.STRING,
        allowNull: false,
        unique: true,
    }
});
module.exports = Employee;