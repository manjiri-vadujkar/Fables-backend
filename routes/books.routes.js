const express = require('express');
const {
  getBooks,
  getBook,
  getBookChapter,
  getFavs,
  addToFav,
  removeFromFav
} = require('../controllers/books.controllers');
const router = express.Router();

router.get('/', getBooks);
router.get('/:bookId', getBook);
router.get('/:bookId/chapter/:chptName', getBookChapter);
router.get('/:bookId/fav', getFavs);
router.post('/:bookId/fav', addToFav);
router.delete('/:bookId/fav', removeFromFav);

module.exports = router;
