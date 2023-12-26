const express = require("express");
const app = express();
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

// Middleware for parsing request bodies
app.use(express.json());
app.use("/admin", adminRouter);
app.use("/user", userRouter);

<<<<<<< HEAD
app.listen(3000, () => {
  console.log(`Server is running on port ${PORT}`);
=======
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
>>>>>>> 09afc46e82e4fce64dd81f192d6fb7b5260a7910
});
