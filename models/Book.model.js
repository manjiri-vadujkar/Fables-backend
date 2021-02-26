const { getPromiseQuery } = require('../common/db');

module.exports = {
  getAll
};

async function getAll() {
  try {
    const query = `SELECT book.*, GROUP_CONCAT(bookchpt.chptname) as chapters from book INNER JOIN bookchpt ON book.bookId = bookchpt.bookId GROUP BY book.bookId`;
    const books = await getPromiseQuery()(query);
    books.forEach(b => {
      b.chapters = b.chapters.split(',');
      b.bookId = parseInt(b.bookId);
    });
    books.sort((a, b) => a.bookId - b.bookId);
    return books;
  } catch (e) {
    throw e;
  }
}

async function get(bookId) {

}