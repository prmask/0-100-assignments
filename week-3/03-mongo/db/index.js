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
const AdminSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter a product name"],
    },
    password: {
      type: String,
      required: [true, "Please enter a secure password"],
    },
  },
  {
    timestamps: true,
  }
);

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter a product name"],
    },
    password: {
      type: String,
      required: [true, "Please enter a secure password"],
    },
  },
  {
    timestamps: true,
  }
);

const CourseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter the title"],
    },
    description: {
      type: String,
      required: [true, "Please enter the description"],
    },
    price: {
      type: Number,
      required: [true, "Please enter the price"],
    },
    image: {
      type: String,
      required: [false, "Please enter a image path"],
    },
  },
  {
    timestamps: true,
  }
);

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
