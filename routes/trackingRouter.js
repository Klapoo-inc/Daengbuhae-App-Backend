const express = require('express');
const userController = require('../controllers/userTController');
const searchController = require('../controllers/searchTController')

const router = express.Router();

router.post('/user', userController.creatUserTracking)
router.post('/search/countbydate',searchController.CountByDateSearchTracking )
router.post('/user/countbydate',userController.CountByDateSearchTracking )
module.exports = router;
