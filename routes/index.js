var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Index',
    });
});

router.get('/show/:section?', function(req, res, next) {
    res.render('show', {
        title: 'Show',
        section: req.params.section,
    });
});

module.exports = router;
