const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/', userController.createuser);
router.put('/', userController.updateuser);

module.exports = router;
