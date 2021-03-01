const express = require('express');
const {
  getFavs,
  addToFav,
  removeFromFav
} = require('../controllers/books.controllers');
const router = express.Router();

router.get('/', getFavs);
router.post('/:bookId', addToFav);
router.delete('/:bookId', removeFromFav);


module.exports = router;