const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Resources

const { getRestaurant } = require('./resources/restaurant');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/restaurant', getRestaurant);

module.exports = app;
