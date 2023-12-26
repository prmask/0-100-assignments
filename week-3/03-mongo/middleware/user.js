const { User } = require("../db");

function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

  const username = req.headers["username"];
  const password = req.headers["password"];

  User.findOne({ username, password }, (err, user) => {
    if (err) {
      return res.status(500).json({ error: "Internal Server error" });
    }

    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    req.user = user;

    next();
  });
}

module.exports = userMiddleware;
