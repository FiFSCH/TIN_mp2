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
    lastName: {
        type: Sequalize.STRING,
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
    dateFrom: {
        type: Sequalize.DATE,
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
    dateTo: {
        type: Sequalize.DATE,
        allowNull: true,
        validate: {
            isDate: {
                msg: "Provide a valid date!"
            }
        }
    },
    phoneNumber: {
        type: Sequalize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: {
                msg: "This field is required!"
            },
            len: {
                args: [2, 15],
                msg: "Field should contain between 2 to 15 characters!"
            },
        }
    },
    email: {
        type: Sequalize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: {
                msg: "This field is required!"
            },
            len: {
                args: [5, 60],
                msg: "Field should contain between 5 to 60 characters!"
            },
            isEmail: {
                msg: "Field should contain correct email address!"
            }
        }
    },
    password: {
        type: Sequalize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "This field is required!"
            },
            len: {
                args: [5, 60],
                msg: "Field should contain between 5 to 60 characters!"
            }
        }
    }, idDepartment: {
        type: Sequalize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "This field is required!"
            }
        }
    }
});
module.exports = Employee;