const RecipesModel = require('../models/recipesModel');

const getAll = async () => {
  const getAllRecipes = await RecipesModel.getAll();

  return getAllRecipes;
};

const findById = async (id) => {
  const findRecipeById = await RecipesModel.findById(id);

  return findRecipeById;
};

const create = async (name, ingredients, preparation, userId) => {
  const newRecipe = await RecipesModel.create(name, ingredients, preparation, userId);

  return newRecipe;
};

const update = async (id, user) => {
  const updateRecipe = await RecipesModel.update(id, user);

  return updateRecipe;
};

const remove = async (id) => {
  const removeRecipe = await RecipesModel.remove(id);

  return removeRecipe;
};

module.exports = {
  getAll,
  create,
  findById,
  update,
  remove,
};