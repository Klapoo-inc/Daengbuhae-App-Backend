const express = require('express');
const usersearchController = require('../controllers/usersearchController');

const router = express.Router();

router.get('/', usersearchController.getUserSearch);
router.post('/', usersearchController.createUserSearch);
router.delete('/', usersearchController.deleteUserSearch);

module.exports = router;
