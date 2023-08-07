const express = require('express');
const basketcontroller = require('../controllers/basketController')

const router = express.Router();

router.post('/', basketcontroller.createBasket);
router.post('/user', basketcontroller.getuserbasket)
router.delete('/', basketcontroller.deleteBasket)
router.post('/list', basketcontroller.deleteBasketList)

module.exports = router;
