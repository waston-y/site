var express = require('express');
var router = express.Router();

/* get admin page */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: '你现在访问的是后台程序'
    });
})

module.exports = router