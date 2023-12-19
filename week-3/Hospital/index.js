const express = require("express");
const app = express();

function userMiddleware(req, res, next) {
  if (username != "prem" && password != "pass") {
    res.status(403).json({ msg: "User doesnt exist" });
    return;
  } else {
    next();
  }
}

function kidneyMiddleware(req, res, next) {
  if (kidneyId != 1 && kidneyId != 2) {
    res.status(411).json({ msg: "wrong inputs" });
    return;
  } else {
    next();
  }
}

app.get("/health-check", userMiddleware, kidneyMiddleware, (req, res) => {
  // Do health checks here
  //   const kidneyId = req.query.kidneyId;
  //   const username = req.headers.username;
  //   const password = req.headers.password;

  res.send("Your Heart is healthy");
});

app.get("/kidney-check", userMiddleware, kidneyMiddleware, (req, res) => {
  // Do health checks here
  //   const kidneyId = req.query.kidneyId;
  //   const username = req.headers.username;
  //   const password = req.headers.password;

  res.send("Your Kidney is healthy");
});
app.get("/heart-check", userMiddleware, (req, res) => {
  // Do health checks here
  //   const kidneyId = req.query.kidneyId;
  //   const username = req.headers.username;
  //   const password = req.headers.password;

  res.send("Your Heart is healthy");
});

app.listen(3000);
