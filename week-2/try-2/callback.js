function kiratsAsyncFunction(callback) {
  callback("Hi there!");
}

async function main() {
  kiratsAsyncFunction(function (value) {
    console.log(value);
  });
}

main();
