const fetch = require('node-fetch');
const { getAll, get, getName } = require('../models/Book.model');
const { getSignedUrl } = require('../common/s3');

module.exports = {
  getBooks,
  getBook,
  getBookChapter
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
    return res.status(500).send({
      data: {},
      message: 'Something went wrong, please try again later'
    });
  }
}

async function getBookChapter(req, res) {
  try {
    const { bookId, chptName } = req.params;
    const bookName = await getName(bookId);
    const s3Url = `${bookId}-${bookName.trim()}/${chptName}.txt`;
    const signedUrl = await getSignedUrl(s3Url);
    const respo = await fetch(signedUrl);
    const data = await respo.text();
    return res.send({
      data,
      message: 'Got chapter contents'
    })
  } catch (e) {
    return res.status(500).send({
      data: {},
      message: 'Something went wrong, please try again later'
    });
  }
}