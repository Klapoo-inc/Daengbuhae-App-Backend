const express = require('express');
const cosmeticController = require('../controllers/cosmeticController');

const router = express.Router();

router.post('/search', cosmeticController.searchCosmetics);
router.post('/get', cosmeticController.getCosmetic);

module.exports = router;
