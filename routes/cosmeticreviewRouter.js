const express = require('express');
const cosmeticreviewController = require('../controllers/cosmeticreviewController');

const router = express.Router();
//
router.get('/', cosmeticreviewController.searchCosmeticReview);
router.post('/', cosmeticreviewController.createCosmeticReview);
router.delete('/', cosmeticreviewController.deleteCosmeticReview);
router.put('/', cosmeticreviewController.updateCosmeticReview);

module.exports = router;
