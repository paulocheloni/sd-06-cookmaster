const { Router } = require('express');
const Recipes = require('../service/RecipesService');
const { createValidation, findByIdValidation } = require('../schemas/RecipesValidation');
const verifyToken = require('../schemas/verifyAuthorization');

const router = new Router();

const OK = 200;
const CREATED = 201;
const NOT_FOUND = 404;
const INTERNAL_SERVER_ERROR = 500;

const INTERNAL_ERROR_MESSAGE = { message: 'Internal Server Error' };

router.get('/', async (_req, res) => {
  try {
    const allRecipes = await Recipes.getAll();

    return res.status(OK).json(allRecipes);
  } catch (err) {
    return res.status(INTERNAL_SERVER_ERROR).json(INTERNAL_ERROR_MESSAGE);
  }
});

router.get('/:id', findByIdValidation, async (req, res) => {
  try {
    const { id } = req.params;

    const fetchedRecipe = await Recipes.findById(id);

    if (!fetchedRecipe) {
      return res.status(NOT_FOUND).json({ message: 'recipe not found' });
    }

    return res.status(OK).json(fetchedRecipe);
  } catch (err) {
    return res.status(INTERNAL_SERVER_ERROR).json(INTERNAL_ERROR_MESSAGE);
  }
});

router.post('/', verifyToken, createValidation, async (req, res) => {
  try {
    const { name, ingredients, preparation } = req.body;
    const id = req.user;

    const newPost = await Recipes.create(name, ingredients, preparation, id);

    return res.status(CREATED).json({ recipe: newPost });
  } catch (err) {
    return res.status(INTERNAL_SERVER_ERROR).json(INTERNAL_ERROR_MESSAGE);
  }
});

module.exports = router;