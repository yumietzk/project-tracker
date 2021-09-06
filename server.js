const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

// Middlewares
app.use(bodyParser.json());

// Import Routes
const tasksRoute = require('./routes/tasks');
app.use('/api/tasks', tasksRoute);

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

mongoose.connect(process.env.DB_CONNECTION, options);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'DB connection error:'));
db.once('open', () => console.log('DB connection successful'));

const PORT = 3001;
app.listen(PORT, () => console.log(`Listening on port 3001 ${PORT}`));
