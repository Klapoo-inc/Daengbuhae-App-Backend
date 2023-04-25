const express = require('express');
const userController = require('../controllers/userTController');
const searchController = require('../controllers/searchTController')
const cosmeticController = require('../controllers/cosmeticTController')

const router = express.Router();

router.post('/user', userController.creatUserTracking)
router.post('/user/countbydate',userController.CountByDateSearchTracking )
router.post('/search/countbydate',searchController.CountByDateSearchTracking )
router.post('/cosmetic', cosmeticController.creatCosmeticTracking)
router.post('/cosmetic/countbydate',cosmeticController.CountByDateCosmeticTracking )

module.exports = router;
