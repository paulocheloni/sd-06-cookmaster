const { Router } = require('express');
const recipesController = require('../controllers/recipesController');
const { registerRecipeValidator } = require('../middlewares/validations/validations');

const recipesRouter = new Router();

recipesRouter.post('/', registerRecipeValidator, recipesController.registerRecipe);

recipesRouter.get('/', recipesController.getAllRecipes);

recipesRouter.get('/:id', recipesController.getRecipesById);

recipesRouter.delete('/:id', recipesController.deleteRecipeById);

recipesRouter.put('/:id/image', recipesController.addImageToRecipe);

module.exports = recipesRouter;
