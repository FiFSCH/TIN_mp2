const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize.js');

const Department = sequelize.define('Department', {
    idDepartment: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    location: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});
module.exports = Department;