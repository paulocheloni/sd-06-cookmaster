const { ObjectId } = require('mongodb');
const connection = require('./connection');

const findAll = async () => {
  const db = await connection();
  return db.collection('recipes').find({}).toArray();
};

const findOne = async (id) => {
  const db = await connection();
  return db.collection('recipes').findOne({ _id: ObjectId(id) });
};

const createOne = async (recipe) => {
  const db = await connection();
  const { insertedId } = await db.collection('recipes').insertOne(recipe);
  return { insertedId, ...recipe };
};

const deleteOne = async (id) => {
  const db = await connection();
  return db.collection('recipes').deleteOne({ _id: ObjectId(id) });
};

const addField = async (id, field) => {
  const db = await connection();
  const recipe = await db.collection('recipes').updateOne({ _id: ObjectId(id) }, [{
    $set: { image: field },
  }]);
  console.log(field, recipe);
  return recipe;
};

const updateOne = async (id, recipe) => {
  const db = await connection();
  await db.collection('recipes').insertOne({ _id: id, ...recipe });
  return {
    name: recipe.name,
    ingredients: recipe.ingredients,
    preparation: recipe.preparation,
    authorId: recipe.authorId,
  };
};

module.exports = {
  updateOne, findAll, findOne, deleteOne, createOne, addField,
};
