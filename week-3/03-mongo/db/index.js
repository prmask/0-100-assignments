const mongoose = require("mongoose");

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://prmask:Hsh%404078@cluster0.bkarbrw.mongodb.net/03-mango?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });

// Define schemas

// Admin Schema
const AdminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please enter a product name"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter a secure password"],
  },
});

// User Schema
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please enter a product name"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter a secure password"],
  },
  purchasedCourses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

// Course Schema
const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter the title"],
  },
  description: {
    type: String,
    required: [true, "Please enter the description"],
  },
  imageLink: {
    type: String,
    required: [true, "Please enter a image path"],
  },
  price: {
    type: Number,
    required: [true, "Please enter the price"],
  },
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
