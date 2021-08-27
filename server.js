const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Task = require('./models/task');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

mongoose.connect(
  'mongodb+srv://yumie:tasktracker@cluster0.8vwbp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  options
);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'DB connection error:'));
db.once('open', () => console.log('DB connection successful'));

// CREATE
app.post('/api/tasks', (req, res) => {
  if (!req.body) {
    return res.status(500).send('request body empty');
  }

  const { id, title, date, status, duedate, description } = req.body;

  new Task({
    id,
    title,
    date,
    status,
    duedate,
    description,
  }).save((err) => {
    if (!err) {
      return res.status(200).send('task create success.');
    } else {
      return res.status(500).send('task create failed.');
    }
  });
});

// READ
app.get('/api/tasks', (req, res) => {
  Task.find({}, (err, taskArray) => {
    // 取得したドキュメントをクライアント側と同じくcharacterArrayと命名
    if (err) res.status(500).send();
    else res.status(200).send(taskArray); // characterArrayをレスポンスとして送り返す
  });
});

// UPDATE

// DELETE

app.listen(3001, () => console.log('Listening on port 3001'));
