const person = { name: "prem", age: "23" };
const arr = [1, 2, 3, 4, 5];

for (const property in person) {
  console.log(`${property}: ${person[property]}`);
}

for (const arrs of arr) {
  console.log(`${arrs}`);
}

arr.forEach((num) => {
  console.log(num * num);
});

Object.keys(person).forEach((key) => {
  console.log(`${key}: ${person[key]}`);
});

Object.entries(person).forEach((key, value) => {
  console.log(`${key}: ${value}`);
});
