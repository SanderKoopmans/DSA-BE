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



module.exports = TodoRoute;