const express = require('express');
const {
  getRead,
  addToRead
} = require('../controllers/books.controllers');
const router = express.Router();

router.get('/', getRead);
router.post('/:bookId', addToRead);


module.exports = router;