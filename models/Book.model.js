const { getPromiseQuery } = require('../common/db');

module.exports = {
  getAll
};

async function getAll() {
  try {
    const query = `SELECT book.*, GROUP_CONCAT(bookchpt.chptname) as chapters from book INNER JOIN bookchpt ON book.bookId = bookchpt.bookId GROUP BY book.bookId`;
    return await getPromiseQuery()(query);
  } catch (e) {
    throw e;
  }
}

async function get(bookId) {

}