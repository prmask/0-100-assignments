const express = require("express");

function calcualteSum(n) {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    ans = ans + i;
  }
  return ans;
}

const app = express();

app.get("/", function (req, res) {
  const n = req.query.n;
  const ans = calcualteSum(n);
  res.sendStatus(ans.toString());
});

app.listen(3000);

// let ans = calcualteSum(10);
// console.log(ans);
