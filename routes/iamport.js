const express = require('express');
const iamport = require('../controllers/iamport/iamport');

const router = express.Router();
router.get('/token', iamport.getToken)
router.get('/payment', iamport.getPayment)

module.exports = router;