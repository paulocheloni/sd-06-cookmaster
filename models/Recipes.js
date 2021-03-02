const { ObjectId } = require('mongodb');
const connection = require('./connection');

const CREATED = 201;
const OK = 200;
const NOT_FOUND = 404;

const recipeRegister = async (name, ingredients, preparation, userId) => {
  const { insertedId } = await connection()
    .then((db) => db.collection('recipes').insertOne({ name, ingredients, preparation, userId }));

  return [{
    recipe: {
      name,
      ingredients,
      preparation,
      userId,
      _id: insertedId,
    },
  }, CREATED];
};

const getRecipes = async () => {
  const recipes = await connection()
    .then((db) => db.collection('recipes').find().toArray());
  
  return [recipes, OK];
};

const getRecipeById = async (id) => {
  const correctIdLength = 24;
  let recipe = false;

  if (id.length === correctIdLength) {
    recipe = await connection()
      .then((db) => db.collection('recipes').findOne({ _id: ObjectId(id) }));
  }
  
  if (recipe) {
    return [recipe, OK];
  }

  const error = [{ message: 'recipe not found' }, NOT_FOUND];
  throw error;
};

module.exports = {
  recipeRegister,
  getRecipes,
  getRecipeById,
};
