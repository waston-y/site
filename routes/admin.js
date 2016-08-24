var express = require('express');
var router = express.Router();
var _ = require('underscore');
var Movie = require('../models/movie')

/* get admin page */
router.get('/', function(req, res, next) {
    res.render('admin/index', {
        title: '后台程序'
    });
});

//管理员添加电影
router.get('/movie/add', function(req, res) {
    var id = req.params._id;
    var movieObj = req.params.movie;
    var _movie = null;

    if (id != undefined) {
        Movie.findById(id, function(err, movie) {
            if (err) {
                console.log(err);
            }
            _movie = _.extend(movie, movieObj);
            _movie.save(function(err, movie) {
                if (err) {
                    console.log(err);
                }
                res.redirect('/movie/' + movie.id)
            });
        })
    } else {
        _movie = new Movie({
            doctor: movieObj.doctor,
            title: movieObj.title,
            language: movieObj.language,
            country: movieObj.country,
            summary: movieObj.summary,
            flash: movieObj.flash,
            poster: movieObj.poster,
            year: movieObj.year,
        });
        _movie.save(function(err, movie) {
            if (err) {
                console.log(err);
            }
            res.redirect('/movie/' + id)
        });
    }
});

//管理员更新电影
router.get('/movie/update', function(req, res) {
    var id = req.params.id;
    Movie.findById(id, function(err, movie) {
        if (err) {
            console.log(err)
        }
        res.redirect('/movie/' + id)
    })
});

//管理员电影列表
router.get('/movie/list', function(req, res) {
    Movie.fetch(function(err, movies) {
        if (err)
            console.log(err);
        res.render('index', {
            title: 'Home',
            movies: movies
        });
    });
})

module.exports = router