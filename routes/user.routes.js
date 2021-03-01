const express = require('express');
const { getUserDetails, subscribe } = require('../controllers/user.controllers');
const router = express.Router();

router.get('/', getUserDetails);
router.post('/subscribe', subscribe);

module.exports = router;
