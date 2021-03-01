const { getPromiseQuery } = require('../common/db');

module.exports = {
  add,
  get,
  getAll,
};

async function add(userId, bookId) {
  try {
    const query = `INSERT INTO userread (userId, bookId) values ?`;
    const values = [
      [userId, bookId]
    ];
    await getPromiseQuery()(query, [values]);
    return;
  } catch (e) {
    throw e;
  }
}

async function get(userId, bookId) {
  try {
    const query = `SELECT * from userread WHERE userId="${userId}" AND bookId="${bookId}"`;
    const favourites = await getPromiseQuery()(query);
    return favourites[0];
  } catch (e) {
    throw e;
  }
}

async function getAll(userId) {
  try {
    const query = `SELECT book.* from userread INNER JOIN book ON userread.bookId = book.bookId WHERE userread.userId="${userId}"`;
    return await getPromiseQuery()(query);
  } catch (e) {
    throw e;
  }
}
