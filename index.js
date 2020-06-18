const express = require('express');
const app = express();
const debug = require('debug')('apirestnode-express:server');

const port = process.env.PORT || 3000;

app.listen(port, () => {
   debug('Server is up and running on port ',port);
})