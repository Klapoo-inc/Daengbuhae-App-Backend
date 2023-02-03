const express = require('express');
const petController = require('../controllers/petController');

const router = express.Router();

router.get('/', petController.getPet);
router.get('/all', petController.getAllPet);
router.post('/', petController.createPet);
router.put('/', petController.updatePet);
router.delete('/', petController.deletePet);
router.get('/main', petController.getMainPet);
router.put('/main', petController.updateMainPet);

module.exports = router;
