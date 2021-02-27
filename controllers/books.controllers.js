const { getAll } = require('../models/Book.model');

module.exports = {
  getBooks,
  getBook
};

async function getBooks(req, res) {
  try {
    const books = await getAll();
    return res.send({
      data: {
        books
      },
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

}