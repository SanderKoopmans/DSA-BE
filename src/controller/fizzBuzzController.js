exports.controller = function fizzBuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return 'FizzBuzz';
    }
    if (number % 3 === 0) {
        return 'Fizz';
    }
    if (number % 5 === 0) {
        return 'Buzz';
    }
    return number;
};

exports.validate = function validate(params) {
    const pattern = new RegExp(/^\d+$/);
    return pattern.test(params);
};
