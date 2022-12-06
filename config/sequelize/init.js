const sequelize = require('./sequelize');

const Employee = require('../../Model/sequelize/Employee');
const Department = require('../../Model/sequelize/Department');
const Contract = require('../../Model/sequelize/Contract');
const DepartmentContract = require('../../Model/sequelize/Department_Contract');

module.exports = () => {
    Employee.hasMany(Employee, {
        as: 'supervisor',
        foreignKey: {name: 'supervisedBy', allowNull: true},
        constraints: true,
        onDelete: 'CASCADE'
    });
    Employee.belongsTo(Employee, {as: 'supervised_by', foreignKey: {name: 'supervisedBy', allowNull: true}});
    Department.hasMany(Employee, {
        as: 'employees',
        foreignKey: {name: 'idDepartment', allowNull: true},
        constraints: true,
        onDelete: 'CASCADE'
    });
    Employee.belongsTo(Department, {as: 'worksIn', foreignKey: {name: 'idDepartment', allowNull: true}});
    Contract.belongsToMany(Department, {
        through: DepartmentContract,
        as: 'departments',
        foreignKey: {name: 'idContract', allowNull: false},
        constraints: true,
        onDelete: 'CASCADE'
    });
    Department.belongsToMany(Contract, {
        through: DepartmentContract,
        as: 'contracts',
        foreignKey: {name: 'idDepartment', allowNull: false},
        constraints: true,
        onDelete: 'CASCADE'
    });

    let allEmps, allDepts, allConts;
    return sequelize.query('SET FOREIGN_KEY_CHECKS = 0').then(function () {
        sequelize.sync({force: true})
            .then(() => {
                return Employee.findAll();
            }).then(emps => {
            if (!emps || emps.length === 0) {
                return Employee.bulkCreate([
                    {
                        firstName: 'John',
                        lastName: 'Doe',
                        dateFrom: '1998-02-02',
                        dateTo: null,
                        phoneNumber: '213769420',
                        email: 'johnDoe@email.com',
                        supervisedBy: null,
                        idDepartment: null
                    },
                    {
                        firstName: 'John2',
                        lastName: 'Doe2',
                        dateFrom: '2001-01-05',
                        dateTo: null,
                        phoneNumber: '420692137',
                        email: 'john2Doe2@email.com',
                        supervisedBy: 1,
                        idDepartment: null
                    }
                ]).then(() => {
                    return Employee.findAll();
                });
            } else {
                return emps;
            }
        }).then(emps => {
            allEmps = emps;
            return Department.findAll();
        }).then(depts => {
            if (!depts || depts.length === 0) {
                return Department.bulkCreate([
                    {location: 'Warsaw', name: 'IT'},
                    {location: 'Zielonka', name: 'HR'}
                ]).then(() => {
                    return Department.findAll();
                });
            } else {
                return depts;
            }
        }).then(depts => {
            allDepts = depts;
            return Contract.findAll();
        }).then(conts => {
            if (!conts || conts.length === 0) {
                return Contract.bulkCreate([
                    {description: 'very important task to be done 1', startDate: '2015-01-02', dueDate: null},
                    {description: 'very important task to be done 2', startDate: '2018-10-07', dueDate: null}
                ]).then(() => {
                    return Contract.findAll();
                });
            } else {
                return conts;
            }
        }).then(deptsConts => {
            if (!deptsConts || deptsConts.length === 0) {
                return DepartmentContract.bulkCreate([
                    {idDepartment: allDepts[0].idDepartment, idContract: allConts[1].idContract},
                    {idDepartment: allDepts[1].idDepartment, idContract: allConts[0].idContract}
                ]).then(() => {
                    return DepartmentContract.findAll();
                });
            } else {
                return deptsConts;
            }
        });

    });
};