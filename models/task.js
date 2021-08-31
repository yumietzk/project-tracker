const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const TaskSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  // date: Date.now,
  status: {
    type: String,
    required: true,
  },
  duedate: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  // title: String,
  // date: String,
  // status: String,
  // dudate: String,
  // description: String,
  // todo: Object?
});

// const Task = mongoose.model('Task', TaskSchema);
// export default Task;

module.exports = mongoose.model('Task', TaskSchema);
