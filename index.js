const express = require('express');
const bodyParser = require('body-parser');
const UsersController = require('./src/controllers/UsersController');

const app = express();

app.use(bodyParser.json());

app.use('/users', UsersController);

app.use((err, req, res, _next) => 
  res.status(500).json({ message: 'Erro interno' }));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send('ok');
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on ${PORT}...`));
