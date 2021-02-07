const express = require('express');
const { getUserDetails } = require('../controllers/user.controllers');
const router = express.Router();

router.use('/', getUserDetails);

module.exports = router;
