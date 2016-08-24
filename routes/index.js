var express = require('express');
var router = express.Router();
var Movie = require('../models/movie')

/* GET home page. */
router.get('/', function(req, res, next) {
    Movie.fetch(function(err, movies) {
        if (err)
            console.log(err);
        res.render('index', {
            title: 'Home',
            movies: movies
        });
    });
});

router.get('/detail/:id', function(req, res) {
    var id = req.params.id
    Movie.findById(id, function(err, movie) {
        if (err)
            console.log(err)
        res.render('detail', {
            title: 'movie: ' + movie.title,
            movie: movie
        })
    })
})

module.exports = router;