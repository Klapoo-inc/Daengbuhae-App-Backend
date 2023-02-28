const express = require('express');
const reviewimageController = require('../controllers/reviewimageController');

const router = express.Router();

router.post('/', reviewimageController.uploadImage);

module.exports = router;
