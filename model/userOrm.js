const { findAllUsers, insertUserQuery } = require('./userQueries');
const connection = require('../config/connection');

const fetchUsers = async () => {
  try {
    const [rows] = await connection.query(findAllUsers);
    return Promise.resolve(rows);
  } catch (e) {
    return Promise.reject(e);
  }
};

const insertUserToDb = async (username) => {
  try {
    const [result] = await connection.query(insertUserQuery);
    return result;
  } catch (e) {
    return Promise.reject(e);
  }
};

module.exports = {
  fetchUsers,
  insertUserToDb,
};
