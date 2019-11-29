var express = require('express');
var router = express.Router();
var Movie = require('../models/movie.model');

// GET movies listing
router.get('/',function(req,res){
    Movie.find({},function(err,movies){
        if(err)
            console.log(err)
        res.send(movies)
    }).limit(30)
})

router.get('/:id',function(req,res){
    Movie.findById(req.params.id,function(err,movie){
        if(err)
            console.log(err);
        res.send(movie)
    })
});

router.put('/:id',function(req, res){
    Movie.findByIdAndUpdate(req.params.id, {$set:req.body}, {new:true}, function(err, movie){
        if(err)
            console.log(err);
        res.send(movie);
    })
});

router.post('/', function(req,res){
    Movie.create(req.body).then(function(newMovie){
        res.send(newMovie);
    });
})

router.delete('/:id', function(req, res){
    Movie.findByIdAndRemove(req.params.id, function(err){
        if(err)
            return next(err);
        res.status(200).send('Ok');
    })
})

module.exports = router;