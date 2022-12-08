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
        validate: {
            notEmpty: {
                msg: "This field is required!"
            },
            len: {
                args: [2, 40],
                msg: "Field should contain between 2 to 40 characters!"
            }
        }
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "This field is required!"
            },
            len: {
                args: [2, 40],
                msg: "Field should contain between 2 to 40 characters!"
            }
        }
    }
});
module.exports = Department;