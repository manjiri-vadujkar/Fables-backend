const { getPromiseQuery } = require('../common/db');

module.exports = {
  getAll,
  get,
  getName
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
    books.forEach(b => b.bookId = parseInt(b.bookId));
    books.sort((a, b) => a.bookId - b.bookId);
    return books;
  } catch (e) {
    console.log(e);
    throw e;
  }
}

async function get(bookId) {
  try {
    const query = `SELECT book.*, GROUP_CONCAT(bookchpt.chptname) as chapters from book INNER JOIN bookchpt ON book.bookId = bookchpt.bookId WHERE book.bookId=${bookId} `;
    const books = await getPromiseQuery()(query);
    books.forEach(b => {
      b.bookId = parseInt(b.bookId);
      b.chapters = b.chapters.split(',');
    });
    return books[0];
  } catch (e) {
    throw e;
  }
}

async function getName(bookId) {
  try {
    const query = `SELECT bookname from book WHERE bookId=${bookId}`;
    const books = await getPromiseQuery()(query);
    return books[0].bookname;
  } catch (e) {
    throw e;
  }
}