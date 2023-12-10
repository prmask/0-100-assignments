function printHelloWorld() {
  console.log("hello world");
}
setTimeout(printHelloWorld, 5000);

let ans = 0;
for (let i = 1; i < 5; i++) {
  ans = ans + i;
}
console.log(ans);
