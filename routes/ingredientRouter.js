const express = require('express');
const ingredientController = require('../controllers/ingredientController');

const router = express.Router();

router.post('/get', ingredientController.getIngredients);

module.exports = router;
