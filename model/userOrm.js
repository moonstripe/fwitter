const { findAllUsers, findUserByIdQuery, insertUserQuery } = require('./userQueries');
const connection = require('../config/connection');

// gets
const fetchUsers = async () => {
  try {
    const [rows] = await connection.query(findAllUsers);
    return Promise.resolve(rows);
  } catch (e) {
    return Promise.reject(e);
  }
};

const fetchUserByIdFromDb = async (userID) => {
  try {
    const [rows] = await connection.query(findUserByIdQuery, userID);
    return rows[0];
  } catch (e) {
    throw new Error(e);
  }
};

// posts
const insertUserToDb = async (username) => {
  try {
    const [result] = await connection.query(insertUserQuery, username);
    return result;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = {
  fetchUsers,
  fetchUserByIdFromDb,
  insertUserToDb,
};
