const i18n = require('i18n');

exports.changeLang = (req, res, next) => {
    const newLang = req.params.lang;
    i18n.setLocale(req, newLang);
    if(['pl','en'].includes(newLang)) {
        res.cookie('tin-lang', newLang);
    };
    res.redirect('/');
}