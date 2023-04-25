const express = require('express');
const userController = require('../controllers/userTController');

const router = express.Router();

router.post('/user', userController.creatUserTracking)
module.exports = router;
