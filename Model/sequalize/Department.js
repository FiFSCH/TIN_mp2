const Sequalize = require('sequelize');
const sequalize = require('../../config/sequalize/sequalize.js');

const Department = sequalize.define('Department',{
    idDepartment:{
        type: Sequalize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    location: {
        type: Sequalize.STRING,
        allowNull: false,
    },
    name: {
        type: Sequalize.STRING,
        allowNull: false,
    }
});
module.exports = Department;