const { getPromiseQuery } = require("../common/db");

module.exports = {
  add,
  getById,
  getByEmail
};

async function add({ userId, name, email, password, subscription }) {
  try {
    const query = `INSERT into user values ?`;
    const values = [
      [userId, name, email, password, subscription]
    ];
    await getPromiseQuery()(query, [values]);
    return;
  } catch (e) {
    throw e;
  }
}


async function getById(userId) {
  try {
    const query = `SELECT name, email, subscription from user WHERE userId="${userId}"`;
    return await getPromiseQuery()(query);
  } catch (e) {
    throw e;
  }
}

async function getByEmail(email) {
  try {
    const query = `SELECT name, email, subscription from user WHERE email="${email}"`;
    return await getPromiseQuery()(query);
  } catch (e) {
    throw e;
  }
}





























































































































































