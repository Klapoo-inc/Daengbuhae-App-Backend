const express = require('express');
const Controller = require('../controllers/usersearchController');

const router = express.Router();

router.get('/', Controller.getUserSearch);
router.post('/', Controller.createUserSearch);
router.delete('/', Controller.deleteUserSearch);

module.exports = router;
