const express = require('express');
const routerUsers = require('./controllers/usersController');
const routerLogin = require('./controllers/loginController');
const routerRecipes = require('./controllers/recipesController');

const app = express();

app.use(express.json()); // body-parser em desuso
// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/users', routerUsers);
app.use('/login', routerLogin);
app.use('/recipes', routerRecipes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Em nome de Jesus tá executando na ${PORT}`));
