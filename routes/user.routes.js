const express = require('express');
const { getUserDetails } = require('../controllers/user.controllers');
const router = express.Router();

router.get('/', getUserDetails);

module.exports = router;
