const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

const tasksRoute = require('./routes/tasks');
app.use('/api/tasks', tasksRoute);

// const Task = require('./models/task');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

mongoose.connect(process.env.DB_CONNECTION, options);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'DB connection error:'));
db.once('open', () => console.log('DB connection successful'));

// // CREATE
// app.post('/api/tasks', (req, res) => {
//   if (!req.body) {
//     return res.status(500).send('request body empty');
//   }

//   const { title, date, status, duedate, description } = req.body;

//   new Task({
//     title,
//     date,
//     status,
//     duedate,
//     description,
//   }).save((err) => {
//     if (!err) {
//       return res.status(200).send('task create success.');
//     } else {
//       return res.status(500).send('task create failed.');
//     }
//   });
// });

// READ
// app.get('/api/tasks', (req, res) => {
//   Task.find({}, (err, taskArray) => {
//     if (err) res.status(500).send();
//     else res.status(200).send(taskArray); // send taskArray to client
//   });
// });

// app.get('/api/tasks/:taskId', (req, res) => {
//   const { id } = req.body;
//   Task.findById({ _id: ObjectId(id) }, (err, task) => {
//     if (err) res.status(500).send();
//     else res.status(200).send(task); // send a task to client
//   });
// });

// UPDATE
// app.put('/api/tasks', (req, res) => {
//   const { id } = req.body; // updateするキャラクターのidをリクエストから取得
//   Task.findByIdAndUpdate(id, { $inc: { age: 1 } }, (err) => {
//     if (err) res.status(500).send();
//     else {
//       // updateに成功した場合、すべてのデータをあらためてfindしてクライアントに送る
//       Task.find({}, (findErr, taskArray) => {
//         if (findErr) res.status(500).send();
//         else res.status(200).send(taskArray);
//       });
//     }
//   });
// });

// // DELETE
// app.delete('/api/tasks', (req, res) => {
//   const { id } = req.body;
//   Task.findByIdAndRemove(id, (err) => {
//     if (err) res.status(500).send();
//     else {
//       Task.find({}, (findErr, taskArray) => {
//         if (findErr) res.status(500).send();
//         else res.status(200).send(taskArray);
//       });
//     }
//   });
// });

// How to start listening to the server
app.listen(3001, () => console.log('Listening on port 3001'));
