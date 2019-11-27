var express = require('express');
var router = express.Router();
const Movie = require('../models/movie.model');

/* GET movies listing. */
router.get('/', function(req, res) {

  Movie.find({}, function(err, movies) {
    if (err) 
      return console.log(err);
    res.send(movies);
  }).limit(30)
  .catch((err) => console.log(err));

});

/* GET movie details */
router.get('/:id', function(req, res) {

  Movie.findById(req.params.id, function(err, movie) {
    if (err) 
      return console.log(err);
    res.send(movie);
  })
  .catch((err) => console.log(err));

});

/* PUT update movie details */
router.put('/:id', function(req, res) {
  Movie.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }, function(err, movie) {
      if (err)
          return console.log(err);
      res.send(movie);
  });

});

/* POST create movie */
router.post('/', function(req, res) {
  Movie.create( req.body ).then((response) => {
      res.send(response);
  }, (error) => {
      return console.log(error);
  });

});

/* DEL delete movie */
router.delete('/:id', function(req, res) {
  Movie.findByIdAndRemove(req.params.id, function (err) {
    if (err) 
      return next(err);
    res.send('Deleted successfully!');
  });

});

module.exports = router;