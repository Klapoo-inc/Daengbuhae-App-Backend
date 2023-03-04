const express = require('express');
const reviewreportController = require('../controllers/reviewreportController');

const router = express.Router();

router.post('/', reviewreportController.createReviewReport);

module.exports = router;
