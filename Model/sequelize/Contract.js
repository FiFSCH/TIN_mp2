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
        validate: {
            notEmpty: {
                msg: "This field is required!"
            },
            len: {
                args: [15, 350],
                msg: "Field should contain between 15 to 350 characters!"
            }
        }
    },
    startDate: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "This field is required!"
            },
            isDate: {
                msg: "Provide a valid date!"
            }
        }
    },
    dueDate: {
        type: Sequelize.DATE,
        allowNull: true,
        validate: {
            isDate: {
                msg: "Provide a valid date!"
            }
        }
    }
});
module.exports = Contract;