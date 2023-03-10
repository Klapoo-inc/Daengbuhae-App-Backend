const express = require('express');
const cosmeticController = require('../controllers/cosmeticController');

const router = express.Router();

router.post('/search', cosmeticController.searchCosmetics);
router.post('/get', cosmeticController.getCosmetic);
router.post('/create', cosmeticController.createCosmetic)
router.delete('/', cosmeticController.deleteCosmetic)
router.put('/', cosmeticController.updatecosmetic)
module.exports = router;
