const { Router } = require('express');

const fizzBuzzController = require('../controller/fizzBuzzController');

const FizzBuzzRouter = Router({ mergeParams: true });

FizzBuzzRouter.post('/:number', (req, res) => {
    // Check incoming :number if it's a number
    const validated = fizzBuzzController.validate(req.params.number);
    if (validated) {
        // Check fizzBuzz requirements
        const answer = fizzBuzzController.controller(req.params.number);
        // Send status code + answer
        return res.send({ status: 200, message: answer });
    }

    // Send status code + error message
    return res.send({ status: 400, message: 'Request is not a number' });
});

module.exports = FizzBuzzRouter;
