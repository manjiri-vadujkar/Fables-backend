const { getPromiseQuery } = require('../common/db');

module.exports = {
  add,
  get,
  getAll,
  remove
};

async function add(userId, bookId) {
  try {
    const query = `INSERT INTO userfav (userId, bookId) values ?`;
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
    const query = `SELECT * from userfav WHERE userId="${userId}" AND bookId="${bookId}"`;
    const favourites = await getPromiseQuery()(query);
    return favourites[0];
  } catch (e) {
    throw e;
  }
}

async function getAll(userId) {
  try {
    const query = `SELECT book.* from userfav INNER JOIN book ON userfav.bookId = book.bookId WHERE userfav.userId="${userId}"`;
    return await getPromiseQuery()(query);
  } catch (e) {
    throw e;
  }
}

async function remove(userId, bookId) {
  try {
    const query = `DELETE FROM userfav WHERE userId="${userId}" AND bookId="${bookId}"`;
    await getPromiseQuery()(query);
    return;
  } catch (e) {
    throw e;
  }
}