const router = require('express')
  .Router();
const { getAllUsers } = require ('../../../controllers/userController');
const connection = require('../../../config/connection');
const { insertUser } = require('../../../model/userQueries');
const { fetchUsers } = require('../../../model/userOrm');

// /api/users prepended to every Route
router.route('/')
  .get(getAllUsers)
  .post();

module.exports = router;
