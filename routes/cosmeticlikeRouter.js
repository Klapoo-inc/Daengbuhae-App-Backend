const express = require('express');
const cosmeticlikeController = require('../controllers/cosmeticlikeController');

const router = express.Router();

router.get('/', cosmeticlikeController.getCosmeticLike);
router.post('/', cosmeticlikeController.createCosmeticLike);
router.delete('/', cosmeticlikeController.deleteCosmeticLike);

module.exports = router;
