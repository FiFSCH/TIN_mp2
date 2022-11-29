const Sequalize = require('sequelize');
const sequalize = require('../../config/sequalize/sequalize.js');

const Department_Contract = sequalize.define('Department_Contract',{
    idDepartment:{
        type: Sequalize.INTEGER,
        primaryKey: true,
    },
    idContract: {
        type: Sequalize.INTEGER,
        primaryKey: true,
    }
});
module.exports = Department_Contract;
