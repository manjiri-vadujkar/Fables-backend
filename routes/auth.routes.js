const express = require('express');
const router = express.Router();

const { login } = require('../controllers/auth.controllers');
const { register } = require('../controllers/auth.controllers');

router.post('/login', login);
router.post('/register', register);

module.exports = router;
