const { Router } = require("express");
const userMiddleware = require("../middleware/user");
const router = Router();
const { User, Course } = require("../db");

// router.use(userMiddleware);

// User Routes

// Implement user signup logic
router.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.create({
      username,
      password,
    }).then((usr) => {
      res.status(200).json({
        message: "User created successfully",
        user: usr,
      });
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// Implement listing all courses logic
router.get("/courses", userMiddleware, async (req, res) => {
  const { username, password } = req.headers;

  try {
    const courses = await Course.find({}).then((cor) => {
      res.status(200).json({
        message: "List of all Coursees",
        courses: cor,
      });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Implement course purchase logic
router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  const { username } = req.headers;

  try {
    const result = await User.findOneAndUpdate(
      { username },
      { $push: { purchased: req.params.courseId } }
    ).then((cor) => {
      res.status(200).json({
        message: "Course purchased successfully",
        courses: cor,
      });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Implement fetching purchased courses logic
router.get("/purchasedCourses", userMiddleware, (req, res) => {
  const { username } = req.headers;

  User.findOne({ username })
    .then((courses) => {
      Course.find({ _id: { $in: courses.purchased } }).then((courses) => {
        res.status(200).json({
          message: "Course purchased successfully",
          courses: courses,
        });
      });
    })
    .catch((error) => {
      res.sendStatus(500).json({ message: error.message });
    });
});

module.exports = router;
