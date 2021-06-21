const { Router } = require('express');

const fizzBuzzController = require('../controller/fizzBuzzController');

const FizzBuzzRouter = Router({ mergeParams: true });

//TODO: implement '/:number' route to reply according to fizzbuzz rules
FizzBuzzRouter.post('/:number', (req, res) => {
  // Check incoming :number if it's a number
  fizzBuzzController.controller(req.params.number);
  res.send({ status: 200 })

  // Check fizzBuzz requirements

  // Send status code + answer
    
});


module.exports = FizzBuzzRouter;
