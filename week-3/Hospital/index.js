const express = require("express");
const zod = require("zod");
const app = express();

const schema = zod.array(zod.number());

app.use(express.json());

// const kidneysInput = z.literal("1").or(z.literal("2"));

//  Zod schema for this
// {
//   email: string => email
//   password: at least 8 letters
//   country: "IN", "US"
//  }

// const sampleSchema = zod.object({
//   email: zod.string().email(),
//   password: zod.string().min(8),
//   country: zod.literal("IN").or(zod.literal("US")),
// });

app.get("/health-check", (req, res) => {
  // Do health checks here
  // const kidneyId = req.body.kidneyId;
  // const validation = kidneysInput.safeParse(kidneyId);

  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);
  if (!response.success) {
    res.status(411).json({
      msg: "input is invalid",
    });
  } else {
    res.send({
      response,
    });
  }

  // if (!validation.success) {
  //   res.status("Incorrect input");
  //   return;
  // }

  // res.send("Your kidney length is " + kidneyLength);
});

// app.use((error, req, res, next) => {
//   res.status(500).send("An internal server error occured");
// });

app.listen(3000);
