const router = require('express').Router();

// api prepended to every Route
// _ denotes parameter unused.
router.get('/', (_req, res) => {
  res.send('Hello');
});

module.exports = router;
