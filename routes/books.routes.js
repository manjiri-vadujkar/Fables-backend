const express = require('express');
const {
  getBooks,
  getBook,
  getBookChapter
} = require('../controllers/books.controllers');
const booksFavRoutes = require('./books-fav.routes');
const booksReadRoutes = require('./books-read.routes');
const bookRatingRoutes = require('./books-ratings.routes');
const router = express.Router();

router.get('/', getBooks);
router.use('/fav', booksFavRoutes);
router.use('/read', booksReadRoutes);
router.use('/rating', bookRatingRoutes);
router.get('/:bookId', getBook);
router.get('/:bookId/chapter/:chptName', getBookChapter);


module.exports = router;
