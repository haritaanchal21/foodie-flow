const express = require('express');
const bodyParser = require('body-parser');
const orderController = require('./orderController');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/orders', orderController);

app.listen(port, () => {
  console.log(`Food Order App running at http://localhost:${port}`);
});
