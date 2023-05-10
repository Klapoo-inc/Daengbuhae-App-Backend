const express = require('express');
const versioncheck = require('../controllers/versioncheck');

const router = express.Router();

router.get('/', versioncheck.versionCheck);

module.exports = router;
