const config = require('../config/auth/key');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const empRepository = require("../config/sequelize/repository/EmployeeRespository");

exports.login = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    empRepository.findByEmail(email).then(emp => {
        if (!emp) {
            return res.status(401).send({messge: "Wrong email or password!"});
        }
        bcrypt.compare(password, emp.password).then(isEqual => {
            if (!isEqual) {
                return res.status(401).send({messge: "Wrong email or password!"});
            }
            const token = jwt.sign(
                {
                    email: emp.email,
                    userId: emp.idEmployee,
                },
                config.secret, {expiresIn: '1h'}
            )
            return res.status(200).json({token: token, userId: emp.idEmployee})
        })
    }).catch(err => {
        console.log(err);
        res.status(501);
    });
}