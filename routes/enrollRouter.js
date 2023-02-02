const express = require('express');
const enrollController = require('../controllers/enrollController');

const router = express.Router();

router.post('/', enrollController.createEnroll);

module.exports = router;
