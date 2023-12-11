function kiratsAsyncFunction() {
  let p = new Promise(function (resolve) {
    resolve("Hi there");
  });

  return p;
}

function main() {
  kiratsAsyncFunction().then(function (value) {
    console.log(value);
  });
}

main();
