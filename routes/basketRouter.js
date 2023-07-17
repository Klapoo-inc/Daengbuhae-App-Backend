const express = require('express');
const basketcontroller = require('../controllers/basketController')

const router = express.Router();

router.post('/', basketcontroller.createBasket);
router.post('/user', basketcontroller.getuserbasket)

module.exports = router;
