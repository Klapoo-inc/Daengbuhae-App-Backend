const express = require('express');
const paymentController = require('../controllers/paymentController')

const router = express.Router();

router.post('/', paymentController.createPayment);
router.get('/',paymentController.getPayment);
router.get('/user',paymentController.searchPaymentByUser)

module.exports = router;
