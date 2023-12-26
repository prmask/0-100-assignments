const { Router } = require("express");
const { Admin, Course } = require("../db");
const adminMiddleware = require("../middleware/admin");

const router = Router();

router.use(adminMiddleware);

// Admin Routes
<<<<<<< HEAD
// Implement admin signup logic
// - POST /admin/signup
// Description: Creates a new admin account.
// Input Body: { username: 'admin', password: 'pass' }
// Output: { message: 'Admin created successfully' }
router.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.create({
      username: username,
      password: password,
    });
    res.status(200).json({
      message: "Admin created successfully",
      admin: admin,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// - POST /admin/courses
//   Description: Creates a new course.
//   Input: Headers: { 'username': 'username', 'password': 'password' }, Body: { title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com' }
//   Output: { message: 'Course created successfully', courseId: "new course id" }
router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const { username, password } = req.headers;
  const { title, description, price, imageLink } = req.body;

  try {
    const course = await Course.create({
      title: title,
      description: description,
      price: price,
      imageLink: imageLink,
    });
    res.status(200).json({
      message: "Course created successfully",
      course: course,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// - GET /admin/courses
//   Description: Returns all the courses.
//   Input: Headers: { 'username': 'username', 'password': 'password' }
//   Output: { courses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }, ... ] }
router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic

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

module.exports = router;
