const express = require("express");
const app = express();

// Middleware for parsing request bodies
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

app.use(express.json());
app.use("/admin", adminRouter);
app.use("/user", userRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
