exports.showContList = (req, res, next) => {
    return res.render('pages/Contract/Contract', {navLocation: 'cont'});
};