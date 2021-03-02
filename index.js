const express = require('express');

const bodyParser = require('body-parser');

const usersController = require('./controllers/usersController');
const loginController = require('./controllers/loginController');
const recipesController = require('./controllers/recipesController');
const checkRequestBody = require('./middlewares/checkRequestBody');

const app = express();

const PORT = 3000;

app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// Requisito 01
app.use('/users', checkRequestBody, usersController);

// Requisito 02
app.use('/login', loginController);

// Requisito 03
app.use('/recipes', recipesController);

app.listen(PORT, () => console.log('Server has been started'));
