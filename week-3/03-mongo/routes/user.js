const { Router } = require("express");
const { User, Course } = require("../db");
const userMiddleware = require("../middleware/user");

const router = Router();

router.use(userMiddleware);

// User Routes
// - POST /users/signup
//   Description: Creates a new user account.
//   Input: { username: 'user', password: 'pass' }
//   Output: { message: 'User created successfully' }
router.post("/signup", async (req, res) => {
  // Implement user signup logic

  const { username, password } = req.body;

  try {
    const user = await User.create({
      username,
      password,
    });
    res.status(200).json({
      message: "Admin created successfully",
      user: user,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// - GET /users/courses
//   Description: Lists all the courses.
//   Input: Headers: { 'username': 'username', 'password': 'password' }
//   Output: { courses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }, ... ] }
router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  try {
    const courses = await Course.find({});
    res.status(200).json({
      message: "Course created successfully",
      courses: courses,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// - POST /users/courses/:courseId
//   Description: Purchases a course. courseId in the URL path should be replaced with the ID of the course to be purchased.
//   Input: Headers: { 'username': 'username', 'password': 'password' }
//   Output: { message: 'Course purchased successfully' }
router.post("/courses/:courseId", userMiddleware, (req, res) => {
  // Implement course purchase logic
});

// - GET /users/purchasedCourses
//   Description: Lists all the courses purchased by the user.
//   Input: Headers: { 'username': 'username', 'password': 'password' }
//   Output: { purchasedCourses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }, ... ] }
router.get("/purchasedCourses", userMiddleware, (req, res) => {
  // Implement fetching purchased courses logic
});
