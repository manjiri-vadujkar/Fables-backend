const express = require('express');
const { getBooks, getBook, getBookChapter } = require('../controllers/books.controllers');
const router = express.Router();

router.get('/', getBooks);
router.get('/:bookId', getBook);
router.get('/:bookId/chapter/:chptName', getBookChapter);

module.exports = router;
