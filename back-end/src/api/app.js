const express = require('express');
require('express-async-errors');

const loginRouter = require('./router/LoginRouter');
const errorFunc = require('./middlewares/errorMiddleware');

const app = express();

app.use(express.json());
app.use('/login', loginRouter);

app.use(errorFunc);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
