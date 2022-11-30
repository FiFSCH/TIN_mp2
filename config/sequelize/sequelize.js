const Sequelize = require('sequelize');


const sequelize = new Sequelize('tin-mp2', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;