const express = require('express');
const cosmeticratingController = require('../controllers/cosmeticratingController');

const router = express.Router();

router.put('/', cosmeticratingController.updateCosmeticRating);
router.get('/', cosmeticratingController.getCosmeticRating);

module.exports = router;
