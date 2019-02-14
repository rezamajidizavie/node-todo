const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/TodoApp", {
  useNewUrlParser: true
});

let Todo = mongoose.model("Todo", {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

let newTodo = new Todo({
  text: " Re dsd "
});

newTodo.save().then(
  doc => {
    console.log(doc);
  },
  err => {
    console.log(err);
  }
);

let User = mongoose.model("User", {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});

let user = new User({
  email: "reza@gmail.com"
});

user.save().then(
  doc => {
    console.log(doc);
  },
  err => {
    console.log(err);
  }
);
