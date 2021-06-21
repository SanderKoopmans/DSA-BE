const chai = require('chai');

const { expect } = chai;

const fizzBuzzController = require('../controller/fizzBuzzController');

describe('fizzBuzz route', () => {
    it('Validate should answer with false if params are non-numeric', () => {
        const result = fizzBuzzController.validate('Some text');
        expect(result).equals(false);
    });

    it('Validate should answer with false if params contain foreign characters incl spaces', () => {
        const result = fizzBuzzController.validate('12 $%');
        expect(result).equals(false);
    });

    it('Validate should answer with true if params contain numbers', () => {
        const result = fizzBuzzController.validate('12');
        expect(result).equals(true);
    });

    it('Controller should answer with Fizz', () => {
        const result = fizzBuzzController.controller('12');
        expect(result).equals('Fizz');
    });

    it('Controller should answer with Buzz', () => {
        const result = fizzBuzzController.controller('20');
        expect(result).equals('Buzz');
    });

    it('Controller should answer with FizzBuzz', () => {
        const result = fizzBuzzController.controller('15');
        expect(result).equals('FizzBuzz');
    });

    it('Controller should answer with provided number', () => {
        const result = fizzBuzzController.controller('7');
        expect(result).equals('7');
    });
});

// More room to improve testing by mocking the server request
