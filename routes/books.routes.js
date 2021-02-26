const express = require('express');
const { getBooks, getBook } = require('../controllers/books.controllers');
const router = express.Router();

router.get('/', getBooks);
router.get('/:bookId', getBook);
// router.post('/:bookId/fav', );
// router.delete('/:bookId/fav', );
// router.post('/:bookId/read', );
// router.get('/:bookId/read', );

module.exports = router;
