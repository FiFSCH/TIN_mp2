const jwt = require('jsonwebtoken');
const config = require('../config/auth/key');
module.exports = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        console.log("BOINK!2222")
        return res.sendStatus(401);
    }
    console.log("BOINK!")
    jwt.verify(token, config.secret, (err, user) => {
        if (err) {
            return res.sendStatus(403);
        }
        req.emp = user;
    })
    next();
}