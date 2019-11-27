var express = require('express');
var router = express.Router();
const Movie = require('../models/movie.model');

/* GET movies listing. */
router.get('/', function(req, res) {

  Movie.find({}, function(err, movies) {
    if (err) 
      return console.log(err);
    res.send(movies);
  })
  .catch((err) => console.log(err));

});

module.exports = router;