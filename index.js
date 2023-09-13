const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config();

const root = require('./api/root');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/', root);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
