const express = require('express');
const ingredientController = require('../controllers/ingredientController');

const router = express.Router();

router.post('/get', ingredientController.getIngredients);
router.post('/search', ingredientController.searchIngredient);

module.exports = router;
