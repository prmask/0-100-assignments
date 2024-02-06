const runAfter1s = (runFn: () => void) => {
  setTimeout(runFn, 1000);
};

console.log(runAfter1s);
