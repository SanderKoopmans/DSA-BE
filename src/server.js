const express = require('express');
const TodoRoute = require('./routes/todo');
const FizzBuzzRoute = require('./routes/fizzBuzz');
const config = require('./config');

const { PORT } = config;

const app = express();
app.use(express.json());

app.use('/todo', TodoRoute);
app.use('/fizzBuzz', FizzBuzzRoute);

app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
});
