var express = require('express');
var router = express.Router();
const AuthController = require('../Controllers/authController');

router.post('/login', AuthController.login);
router.get('/logout', AuthController.logout);
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {navLocation: 'main'});
});
module.exports = router;