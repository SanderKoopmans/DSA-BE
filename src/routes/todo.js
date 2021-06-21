const { Router } = require('express');
const { addTodo, getTodoById } = require('../dataStore');

const TodoRoute = Router({ mergeParams: true });

TodoRoute.get('/:id', (req, res) => {
    const { id } = req.params;

    return res.send(getTodoById(id));
});

TodoRoute.post('/', function (req,res) {
    // TODO: Validate the request body


    addTodo(req.body);
});

// Validation tests
// Create a function to invoke a controller for TodoRoute
// Test controller functionality:

// - test if incoming request is of type POST, else send 405

// - test if Incoming object has the format of {
//     "type": "object",
//     "properties": {
//         "title": { "type": "string" },
//         "created": { "type": "string", "format": "date-time" }
//     },
//     "additionalProperties:": false
// }

// - test if Object = valid JSON

// - test if properties has a title of type string, without any odd characters only allow 'a-z 0-9 - _'

// - test if properties has a created of type string, without any odd characters only allow 'a-z 0-9 - _'
// - test if format matches format as specified in the API documentation

// - test if route responds with 400 if any additional properties are added




module.exports = TodoRoute;