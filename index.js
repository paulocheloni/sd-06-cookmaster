const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');
const UserService = require('./src/services/UserService');
const LoginService = require('./src/services/LoginService');
const { verifyToken } = require('./src/utils');
const RecipesService = require('./src/services/RecipesService');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/users', 
  rescue(UserService.validateRequestFields), 
  rescue(UserService.insertUser));

app.post('/login', rescue(LoginService.checkEmailAndPassword));

app.post('/recipes', 
  rescue(verifyToken), 
  rescue(RecipesService.verifyFields),
  rescue(RecipesService.insertRecipe));

app.use((err, req, res, _next) => {
  const codeStatus = (err.codeStatus) ? err.codeStatus : 500;
  res.status(codeStatus).json({ message: err.message });
});

app.listen(PORT);