const express = require('express');
const addresscontroller = require('../controllers/addressController')

const router = express.Router();

router.post('/', addresscontroller.createAddress);
router.post('/user', addresscontroller.getuseraddresss)

module.exports = router;
