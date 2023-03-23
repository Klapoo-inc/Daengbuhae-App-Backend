const express = require('express');
const cosmeticimageController = require('../controllers/cosmeticimageController');

const router = express.Router();

router.post('/', cosmeticimageController.uploadImage);

module.exports = router;
