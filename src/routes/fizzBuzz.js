const { Router } = require('express');

const FizzBuzzRouter = Router({ mergeParams: true });

//TODO: implement '/:number' route to reply according to fizzbuzz rules
FizzBuzzRouter.post('/:number', (req, res) => {
    
});


module.exports = FizzBuzzRouter;
