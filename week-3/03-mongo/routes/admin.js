const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db");

// router.use(adminMiddleware);

// Admin Routes

// Implement admin signup logic
router.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.create({
      username,
      password,
    }).then((adm) => {
      res.status(200).json({
        message: "Admin created successfully",
        admin: adm,
      });
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// Implement course creation logic
router.post("/courses", adminMiddleware, async (req, res) => {
  const { username, password } = req.headers;
  const { title, description, price, imageLink } = req.body;

  try {
    const course = await Course.create({
      title,
      description,
      price,
      imageLink,
    }).then((cor) => {
      res.status(200).json({
        message: "Course created successfully",
        course: cor,
        courseId: cor._id,
      });
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// Implement fetching all courses logic
router.get("/courses", adminMiddleware, async (req, res) => {
  const { username, password } = req.headers;

  try {
    const courses = await Course.find({}).then((cor) => {
      res.status(200).json({
        message: "List of all courses",
        courses: cor,
      });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
