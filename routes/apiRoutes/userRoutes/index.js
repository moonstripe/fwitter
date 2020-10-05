const router = require('express')
  .Router();
const { getAllUsersApi, insertUserApi } = require('../../../controllers/userController');

// /api/users prepended to every Route
router.route('/')
  .get(getAllUsersApi)
  .post(insertUserApi);

module.exports = router;
