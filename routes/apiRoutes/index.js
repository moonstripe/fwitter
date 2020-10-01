const router = require('express').Router();
const userRoutes = require('./userRoutes');

// api prepended to every Route
// _ denotes parameter unused.
router.use('/users', userRoutes);

module.exports = router;
