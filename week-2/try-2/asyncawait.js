function kiratsAsyncFunction() {
  let p = new Promise(function (resolve) {
    resolve("Hi there");
  });

  return p;
}

async function main() {
  const value = await kiratsAsyncFunction();
  console.log(value);
}

main();
