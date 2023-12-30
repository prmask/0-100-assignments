const jwt = require("jsonwebtoken");
const jwtPassword = "userSecretPassword";

// Middleware for handling Authentication
function userMiddleware(req, res, next) {
  const token = req.header("Authorization")?.split(" ")?.[1];

  try {
    const verified = jwt.verify(token, jwtPassword);

    if (verified) {
      req.body.username = verified.username;
      next();
    } else {
      res.status(401).json({ message: "User Authentication failed" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = userMiddleware;
