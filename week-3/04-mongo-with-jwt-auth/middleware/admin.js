const jwt = require("jsonwebtoken");
const jwtPassword = "adminSecretPassword";

// Middleware for handling auth
function adminMiddleware(req, res, next) {
  let token = req.header("Authorization")?.split(" ")?.[1];
  try {
    const verified = jwt.verify(token, jwtPassword);

    if (verified) {
      req.body.username = verified.username;
      next();
    } else {
      req.sendStatus(401).json({ message: "Admin Authrization failed" });
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500).json({ erro: "Internal Server Error" });
  }
}

module.exports = adminMiddleware;
