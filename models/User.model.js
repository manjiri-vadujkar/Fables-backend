const { getPromiseQuery } = require("../common/db");

module.exports = {
  add,
  get
};

async function add() {
  try {
    const query = `INSERT into user values ?`;
    const values = [
      []
    ];
    await getPromiseQuery()(query, [values]);
    return;
  } catch (e) {
    throw e;
  }
}


async function get(userId) {
  try {
    const query = `SELECT * from user WHERE userId=${userId}`;
    await getPromiseQuery()(query);
    return;
  } catch (e) {
    throw e;
  }
}





























































































































































