const { Router } = require("express");
const jwt = require("jsonwebtoken");
const router = Router();

const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db/");

// router.use(adminMiddleware);

const jwtPassword = "adminSecretPassword";
// Admin Routes

// Implement admin signup logic
router.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.create({ username, password }).then(() => {
      res.json({ message: "Admin created successfully" });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Implement admin signup logic
router.post("/signin", async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.where({ username, password })
      .findOne()
      .then((user) => {
        if (user) {
          let token = jwt.sign({ username }, jwtPassword);
          res.json({ token });
        } else {
          return res.status(401).send("Unauthrised Access");
        }
      });
  } catch (error) {
    console.log(error);
    res.sendStatus(500).json({
      message: "Internal Server Error",
    });
  }
});

// Implement course creation logic
router.post("/courses", adminMiddleware, async (req, res) => {
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
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

// Implement fetching all courses logic
router.get("/courses", adminMiddleware, async (req, res) => {
  try {
    const courses = await Course.find({}).then((cor) => {
      res.status(200).json({
        message: "List of all courses",
        courses: cor,
      });
    });
  } catch (error) {
    console.log((error) => {
      console.log(error);
      res.status(500).json({ message: error.message });
    });
  }
});

module.exports = router;
