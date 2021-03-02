// const rescue = require('express-rescue');
// const routes = require('express').Router();
// const recipes = require('../services/recipes');

// const OK = 200;
// const CREATED = 201;
// // const BAD_REQUEST = 400;
// // const NOT_FOUND = 404;
// const UNPROCESSABLE_ENTITY = 422;

// routes.route('/:id')
//   .get(rescue(async (req, res) => {
//     const { id } = req.params;
//     const searchedProduct = await recipes.findById(id);

//     if (searchedProduct === null || searchedProduct.err) {
//       return res.status(UNPROCESSABLE_ENTITY).json(searchedProduct);
//     }

//     res.status(OK).json(searchedProduct);
//   }))
//   .put(rescue(async (req, res) => {
//     const { id } = req.params;
//     const updateProduct = req.body;
//     const productToUpdate = await recipes.update(id, updateProduct);

//     if (productToUpdate.err) {
//       return res.status(UNPROCESSABLE_ENTITY).json(productToUpdate);
//     }

//     res.status(OK).json(productToUpdate);
//   }))
//   .delete(rescue(async (req, res) => {
//     const { id } = req.params;
//     const productToDelete = await recipes.deleteProduct(id);

//     if (productToDelete === null || productToDelete.err) {
//       return res.status(UNPROCESSABLE_ENTITY).json(productToDelete);
//     }

//     res.status(OK).json(productToDelete);
//   }));

// routes.route('/')
//   .get(rescue(async (_req, res) => {
//     const recipesArray = await recipes.getAll();

//     res.status(OK).json({ recipes: recipesArray });
//   }))
//   .post(rescue(async (req, res) => {
//     const { name, quantity } = req.body;
//     const createdProduct = await recipes.create(name, quantity);
    
//     if (createdProduct.err) {
//       return res.status(UNPROCESSABLE_ENTITY).json(createdProduct);
//     }

//     res.status(CREATED).json(createdProduct);
//   }));

// module.exports = routes;