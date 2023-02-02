const express = require('express');
const petController = require('../controllers/petController');

const router = express.Router();

router.get('/', petController.getCosmeticLike);
router.post('/', petController.createCosmeticLike);
router.delete('/', petController.deleteCosmeticLike);

module.exports = router;
