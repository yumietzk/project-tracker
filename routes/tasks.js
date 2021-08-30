const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// CREATE
router.post('/', async (req, res) => {
  if (!req.body) {
    return res.status(500).send('request body empty');
  }

  const { title, date, status, duedate, description } = req.body;
  const task = new Task({
    title,
    date,
    status,
    duedate,
    description,
  });

  try {
    await task.save();
    res.status(200).send('task create success.');
  } catch (err) {
    res.status(500).send('task create failed.');
  }
});

// READ
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).send(tasks);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.get('/:taskId', async (req, res) => {
  try {
    const task = await Task.findById(req.params.taskId);
    res.status(200).send(task);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// UPDATE
router.patch('/:taskId', async (req, res) => {
  try {
    const updatedTask = await Task.updateOne(
      { _id: req.params.taskId },
      { $set: { title: req.body.title } }
    );

    res.status(200).send(updatedTask);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// DELETE
// router.delete('/', (req, res) => {
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

router.delete('/:taskId', async (req, res) => {
  try {
    await Task.remove({ _id: req.params.taskId });

    const tasks = await Task.find();
    res.status(200).send(tasks);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
