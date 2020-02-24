const express = require('express');
const app = express();

app.use('/', express.static('./views')).listen(3112)