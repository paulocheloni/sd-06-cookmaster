const { Router } = require('express');
const { RecipesController } = require('../controllers');
const { validateRecipeFields } = require('../middlewares');

const RecipeRouter = Router();

RecipeRouter.post('/',
  validateRecipeFields,
  RecipesController.registerNewRecipe);
RecipeRouter.get('/', RecipesController.listAllRecipes);
RecipeRouter.get('/:id', RecipesController.listRecipeById);
RecipeRouter.put('/:id', RecipesController.editRecipe);
RecipeRouter.delete('/:id', RecipesController.deleteRecipe);

module.exports = RecipeRouter;