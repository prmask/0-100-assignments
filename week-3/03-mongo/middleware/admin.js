const { Admin } = require("../db");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const username = req.headers["username"];
  const password = req.headers["password"];

  Admin.findOne({ username, password }, (err, admin) => {
    if (err) {
      return res.status(500).json({ error: "Internal Server error" });
    }

    if (!admin) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    req.admin = admin;

    next();
  });
}

module.exports = adminMiddleware;
