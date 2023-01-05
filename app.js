var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
const empRouter = require('./routes/EmpRoute');
const deptRouter = require('./routes/DeptRoute');
const contDeptRouter = require('./routes/ContDeptRoute');
const contRouter = require('./routes/ContractRoute');
const sequelizeInit = require('./config/sequelize/init');
const empApiRouter = require('./routes/api/EmployeeApiRoute');
const deptApiRouter = require('./routes/api/DepartmentApiRoute');
const contApiRouter = require('./routes/api/ContractApiRoute');
const deptContApiRouter = require('./routes/api/DeptContApiRoute');
const session = require('express-session');
const authUtil = require('./util/authUtils');
const i18n = require('i18n');


sequelizeInit().catch(err => {
    console.log(err);
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser('secret'));
app.use(express.static(path.join(__dirname, 'public')));


i18n.configure({
    locales: ['pl', 'en'],
    directory: path.join(__dirname, 'locales'),
    objectNotation: true,
    cookie: 'tin-lang',
});
app.use(i18n.init);

app.use((req, res, next) => {
    if(!res.locals.lang) {
        const currentLang = req.cookies['tin-lang'];
        res.locals.lang = currentLang;
    }
    next();
});

app.use(session({
    secret: 'We\'re no strangers to love ' +
        'You know the rules and so do I ' +
        'A full commitment\'s what I\'m thinking of ' +
        'You wouldn\'t get this from any other guy ' +
        'I just wanna tell you how I\'m feeling ' +
        'Gotta make you understand ' +
        'Never gonna give you up ' +
        'Never gonna let you down ' +
        'Never gonna run around and desert you ' +
        'Never gonna make you cry ' +
        'Never gonna say goodbye ' +
        'Never gonna tell a lie and hurt you',
    resave: false
}));

app.use((req, res, next) => {
    const loggedUser = req.session.loggedUser;
    res.locals.loggedUser = loggedUser;
    if (!res.locals.loginError) {
        res.locals.loginError = undefined;
    }
    next();
});

app.use('/', indexRouter);
app.use('/employees', authUtil.permitAuthenticatedUser, empRouter);
app.use('/departments', deptRouter);
app.use('/contracts_departments', authUtil.permitAuthenticatedUser, contDeptRouter);
app.use('/contracts', authUtil.permitAuthenticatedUser, contRouter);
app.use('/api/employees', /*authUtil.permitAuthenticatedUser,*/empApiRouter);
app.use('/api/departments',/*authUtil.permitAuthenticatedUser,*/ deptApiRouter);
app.use('/api/contracts',/*authUtil.permitAuthenticatedUser,*/ contApiRouter);
app.use('/api/deptconts',/*authUtil.permitAuthenticatedUser,*/ deptContApiRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
