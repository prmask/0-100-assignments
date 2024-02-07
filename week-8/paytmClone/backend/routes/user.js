const express = require("express");

const router = express.Router();
const zod = require("zod");
const jwt = require("jsonwebtoken");

const { User, Account } = require("../db");
const { JWT_SECRET } = require("../config");
const { authMiddleware } = require("../middleware");

const signupBody = zod.object({
  username: zod.string().email(),
  firstName: zod.string().max(50),
  lastName: zod.string().max(50),
  password: zod.string().min(8).max(32),
});

router.post("/signup", async (req, res) => {
  const { success } = signupBody.safeParse(req.body);

  console.log(req.body, { success }, "----------------------------");

  if (!success) {
    return res.status(411).json({
      message: "Email already taken / Incorrect inputs",
    });
  }

  const existingUser = await User.findOne({
    username: req.body.username,
  });

  if (existingUser) {
    return res.status(411).json({
      message: "Email already taken / Incorrect inputs",
    });
  }

  const user = await User.create({
    username: req.body.username,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });

  const userId = user._id;

  /// ----- Create new account ------

  await Account.create({
    userId,
    balance: 1 + Math.random() * 10000,
  });

  /// -----  ------

  const token = jwt.sign(
    {
      userId,
    },
    JWT_SECRET
  );

  res.json({
    message: "User created successfully",
    token: token,
  });
});

const signinBody = zod.object({
  username: zod.string().email(),
  password: zod.string().min(8).max(32),
});

router.post("/signin", async (req, res) => {
  const { success } = signinBody.safeParse(req.body);
  console.log({ success }, req.body, "RRRRRRRRRRRRRRRRRRRRR");
  if (!success) {
    return res.status(411).json({
      message: "Email already taken / Incorrect inputs",
    });
  }

  const user = await User.findOne({
    username: req.body.username,
    password: req.body.password,
  });

  if (user) {
    const token = jwt.sign(
      {
        userId: user._id,
      },
      JWT_SECRET
    );

    res.json({
      token: token,
    });

    return;
  }

  res.status(411).json({
    message: "Error while logging in",
  });
});

const updateBody = zod.object({
  passowrd: zod.string().optional(),
  firstName: zod.string().optional(),
  lastName: zod.string().optional(),
});

router.put("/", authMiddleware, async (req, res) => {
  const { success } = updateBody.safeParse(req.body);

  if (!success) {
    res.status(411).json({
      message: "Error while updating information",
    });
  }

  await User.updateOne(req.body, {
    _id: req.userId,
  });

  res.json({
    message: "Update successfully",
  });
});

router.get("/bulk", async (req, res) => {
  const filter = req.query.filter || "";

  const users = await User.find({
    $or: [
      {
        firstName: {
          $regex: filter,
        },
      },
      {
        lastName: {
          $regex: filter,
        },
      },
    ],
  });

  res.json({
    user: users.map((user) => ({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
});

module.exports = router;
