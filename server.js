const express = require('express');
const history = require('connect-history-api-fallback');
const app = express();
const port = 80;

app.use('/', express.static('build'))
app.use(history());

app.listen(port);