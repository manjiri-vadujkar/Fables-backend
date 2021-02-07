const { createPool, Pool, PoolConnection } = require('mysql');
const { promisify } = require('util');

/**
 * Database Connection Pool
 */
let connectionPool;

module.exports = {
  createDbPool,
  getPromiseQuery,
  getConnection
};

function createDbPool() {
  connectionPool = createPool({
    connectionLimit: 100,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_DATABASE,
    debug: false
  });
}

/**
 * Get Promise Query
 */
function getPromiseQuery() {
  return promisify(connectionPool.query).bind(connectionPool);
}

/**
 * Get Database connection
 */
function getConnection() {
  return new Promise((resolve, reject) => {
    connectionPool.getConnection((err, connection) => {
      if (err) {
        return reject(err);
      }
      return resolve(connection);
    });
  });
}
