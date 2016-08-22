var express = require('express');
var router = express.Router();

/* get admin page */
router.get('/', function(req, res, next) {
    res.render('admin/index', {
        title: '后台程序'
    });
})

module.exports = router