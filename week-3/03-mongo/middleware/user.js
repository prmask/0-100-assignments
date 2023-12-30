const { User } = require("../db");

// User Middleware for handling Authentication
async function userMiddleware(req, res, next) {
  const { username, password } = req.headers;

  try {
    const user = await User.findOne({ username, password });

    if (user) {
      next();
    } else {
      res.status(401).json({ error: "Unauthorized" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server error" });
  }
}

module.exports = userMiddleware;
