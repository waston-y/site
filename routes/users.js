var express = require('express');
var router = express.Router();
var models = require('../models/index.js').models;
var mongoose = require('../database.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/index', function(req, res, next){
	res.render('admin/index');
});

/* post users page. */
router.post('/index', function(req, res, next) {
    var query_doc = {
        userid: req.body.username,
        password: req.body.pwd,
    }
    console.log(query_doc);
    (function() {
        models.user.count(query_doc, function(err, doc) {
            if (doc == 1) {
                console.log('userid: ' + query_doc.userid + ' logined success');
                res.redirect('/users/index');
            } else {
                console.log('failed');
                res.redirect('/');
            }
        })
    })(query_doc)
});

module.exports = router;
