const { Router } = require('express');
const controllers = require('../Controllers/recipeControllers');
const validateRecipe = require('../Middlewares/validateRecipe');
const validateToken = require('../Middlewares/validateToken');
const withOrWithoutToken = require('../Middlewares/withOrWithoutToken');
const verifyToken = require('../auth/verifyToken');

const router = new Router();

router.post('/', validateRecipe, validateToken, async (req, res) => {
  const token = req.headers.authorization;
  const { name, ingredients, preparation } = req.body;

  const { _id } = verifyToken(token);

  const newRecipe = await controllers.create(_id, name, ingredients, preparation);

  return res.status(201).send(newRecipe);
});

router.get('/', withOrWithoutToken, async (_req, res) => {
  const recipesList = await controllers.getAll();

  return res.status(200).send(recipesList);
});

module.exports = router;
