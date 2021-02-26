const { getPromiseQuery } = require('../common/db');

module.exports = {
  getAll
};

async function getAll(limit = 0, genre = '') {
  try {
    let query = `SELECT * from book`;
    if (genre) {
      query += ` WHERE genre="${genre}"`;
    }
    // 0 means no limit
    if (limit !== 0) {
      query += ` LIMIT ${limit}`;
    }
    const books = await getPromiseQuery()(query);
    books.forEach(b => {
      b.bookId = parseInt(b.bookId);
    });
    books.sort((a, b) => a.bookId - b.bookId);
    return books;
  } catch (e) {
    console.log(e);
    throw e;
  }
}

async function get(bookId) {
  const query = `SELECT book.*, GROUP_CONCAT(bookchpt.chptname) as chapters from book INNER JOIN bookchpt ON book.bookId = bookchpt.bookId GROUP BY book.bookId`;

}