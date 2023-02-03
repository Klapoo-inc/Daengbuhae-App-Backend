const express = require('express');
const petimageController = require('../controllers/petimageController');

const router = express.Router();

router.post('/', petimageController.uploadImage);

module.exports = router;
