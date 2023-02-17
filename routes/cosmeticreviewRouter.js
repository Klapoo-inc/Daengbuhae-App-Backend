const express = require('express');
const cosmeticreviewController = require('../controllers/cosmeticreviewController');

const router = express.Router();
//
// router.get('/', cosmeticreviewController.getCosmeticReview);
router.post('/', cosmeticreviewController.createCosmeticReview);
router.delete('/', cosmeticreviewController.deleteCosmeticReview);

module.exports = router;
