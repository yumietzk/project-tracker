const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
  title: String,
  date: String,
  status: String,
  duedate: String,
  description: String,
  todos: [
    {
      id: Number,
      value: String,
      todoChecked: Boolean,
    },
  ],
});

module.exports = mongoose.model('Task', TaskSchema);
