const express = require('express');
const {
  getBooks,
  getBook,
  getBookChapter,
  getFavs,
  addToFav,
  removeFromFav,
  getRead,
  addToRead
} = require('../controllers/books.controllers');
const router = express.Router();

router.get('/', getBooks);
router.get('/fav', getFavs);
router.get('/read', getRead);
router.get('/:bookId', getBook);
router.get('/:bookId/chapter/:chptName', getBookChapter);
router.post('/:bookId/fav', addToFav);
router.delete('/:bookId/fav', removeFromFav);
router.post('/:bookId/read', addToRead);

module.exports = router;
