const { getPromiseQuery } = require('../common/db');

module.exports = {
  add,
  update,
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

async function update(columns, userId) {
  try {
    let query = `UPDATE user SET`;
    columns.forEach(({key, value}) => {
      query += ` ${key} = ${value}`;
    });
    query += ` WHERE userId="${userId}"`;
    await getPromiseQuery()(query);
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
    const query = `SELECT userId, name, email, password from user WHERE email="${email}"`;
    return await getPromiseQuery()(query);
  } catch (e) {
    throw e;
  }
}





























































































































































