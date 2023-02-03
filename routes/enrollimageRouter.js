const express = require('express');
const enrollimageController = require('../controllers/enrollimageController');

const router = express.Router();

router.post('/', enrollimageController.uploadImage);

module.exports = router;
