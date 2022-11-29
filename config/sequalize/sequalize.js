const Sequalize = require('sequalize');


const sequalize = new Sequelize('tin_mp2','root','root',{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports =sequalize;