const { getAll, get } = require('../models/Book.model');

module.exports = {
  getBooks,
  getBook
};

async function getBooks(req, res) {
  try {
    const { limit, genre } = req.query;
    const books = await getAll(limit ? limit : 0, genre ? genre : '');
    return res.send({
      data: books,
      message: 'Got books'
    });
  } catch (e) {
    return res.status(500).send({
      data: {},
      message: 'Something went wrong, please try again later'
    });
  }
}

async function getBook(req, res) {
  try {
    const book = await get(req.params.bookId);
    return res.send({
      data: book[0],
      message: 'Got book'
    });    
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      data: {},
      message: 'Something went wrong, please try again later'
    });
  }
}