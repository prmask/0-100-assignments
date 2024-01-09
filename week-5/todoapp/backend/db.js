const mongoose = require("mongoose");

// .env
mongoose.connect(
  "mongodb+srv://prmask:Hsh%404078@cluster0.bkarbrw.mongodb.net/todo5?retryWrites=true&w=majority"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = {
  Todo,
};
