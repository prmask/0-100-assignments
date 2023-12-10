function findSum(n) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans += i;
  }
  return ans;
}

function findSumTill100() {
  return findSum(100);
}

setTimeout(findSumTill100, 1000);
console.log("hello world");
