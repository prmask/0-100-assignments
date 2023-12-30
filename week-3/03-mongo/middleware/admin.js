const { Admin } = require("../db");

// Admin Middleware for handling Authentication
async function adminMiddleware(req, res, next) {
  const { username, password } = req.headers;

  try {
    const admin = await Admin.findOne({ username, password });

    if (admin) {
      next();
    } else {
      res.status(401).json({ error: "Unauthorized" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = adminMiddleware;
