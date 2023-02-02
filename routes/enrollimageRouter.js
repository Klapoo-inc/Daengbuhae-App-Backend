const express = require('express');
const imageController = require('../controllers/enrollimageController');

const router = express.Router();

router.post('/', imageController.uploadImage);

module.exports = router;
