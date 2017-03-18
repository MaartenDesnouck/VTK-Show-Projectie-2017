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

router.get('/timeline', function(req, res, next) {
    res.render('timeline', {
        title: 'Timeline',
    });
});

router.get('/tinder', function(req, res, next) {
    res.render('tinder', {
        title: 'Tinder',
    });
});


module.exports = router;
