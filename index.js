const express = require('express');
const routes = require('./routes');

const app = express();

app.use(routes);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server started listening on PORT http://localhost:${PORT}`);
});
