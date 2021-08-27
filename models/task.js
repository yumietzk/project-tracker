const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  title: String,
  date: String,
  status: String,
  duedate: String,
  description: String,
  // todo: Object?
});

// const Task = mongoose.model('Task', TaskSchema);
// export default Task;

module.exports = mongoose.model('Task', TaskSchema);
