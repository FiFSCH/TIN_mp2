const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize.js');

const Department_Contract = sequelize.define('Department_Contract', {
    idDepartment: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    idContract: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    }
});
module.exports = Department_Contract;
