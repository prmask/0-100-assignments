const { Router } = require("express");
const jwt = require("jsonwebtoken");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

const jwtPassword = "userSecretPassword";

// User Routes

// Implement user signup logic
router.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.create({ username, password }).then((usr) => {
      res.status(200).json({
        message: "User created successfully",
        user: usr,
      });
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ messagge: error.message });
  }
});

// Implement admin signup logic
router.post("/signin", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.where({ username, password })
      .findOne()
      .then((user) => {
        if (user) {
          let token = jwt.sign({ username }, jwtPassword);
          res.json({ token });
        } else {
          return res.status(401).json({ message: "Unauthorised Access" });
        }
      });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// Implement listing all courses logic
router.get("/courses", async (req, res) => {
  try {
    const courses = await Course.find({}).then((cor) => {
      res.status(200).json({
        message: "List of all courses",
        courses: cor,
      });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

// Implement course purchase logic
router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  const { username } = req.body;

  try {
    const course = await User.findOneAndUpdate(
      { username },
      {
        $push: {
          purchased: req.params.courseId,
        },
      }
    ).then((cor) => {
      res.status(200).json({
        message: "Course purchased successfully",
        courses: cor,
      });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

// Implement fetching purchased courses logic
router.get("/purchasedCourses", userMiddleware, (req, res) => {
  const { username } = req.body;

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
