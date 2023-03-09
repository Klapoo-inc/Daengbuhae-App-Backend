const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/', userController.createuser);
router.put('/', userController.updateuser);
router.delete('/', userController.deleteUser);
router.get('/', userController.getUser);
module.exports = router;
