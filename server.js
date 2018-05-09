const express = require('express');
const port = process.env.PORT || 3000
const app = express();
const apiRoutes = require('./app/routing/apiRoutes');
const htmlRoutes = require('./app/routing/htmlRoutes');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use('/', apiRoutes);
app.use('/', htmlRoutes);
app.listen(port);