const express = require('express');
const {
  addReview
} = require('../controllers/books.controllers');
const router = express.Router();

router.post('/:bookId', addReview);

module.exports = router;