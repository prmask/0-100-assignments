/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryTotal = {};

  // For each of the transaction do the following
  transactions.forEach((transaction) => {
    // Deconstruct the transaction to category and price
    const { category, price } = transaction;

    // If the category already exists in categoryTotalthe object add the price
    if (categoryTotal[category]) {
      categoryTotal[category] += price;
    } else {
      // If the category does not exists, add the category to the object
      categoryTotal[category] = price;
    }
  });

  // Array to store the object
  let categoryListObj = [];

  // Object to create category object
  let obj = {};

  // Reformating categoryTotal to the required output format
  Object.entries(categoryTotal).map((arr) => {
    obj[arr[0]] = arr[1];
    categoryListObj.push(obj);
    obj = {};
  });

  return categoryListObj;
}

// Sample imput data
const transactionList = [
  {
    itemName: "tomato",
    category: "vegetable",
    price: 22,
    timestamp: "2023-01-12",
  },
  {
    itemName: "potato",
    category: "vegetable",
    price: 42,
    timestamp: "2023-02-12",
  },
  {
    itemName: "banana",
    category: "fruit",
    price: 32,
    timestamp: "2023-03-12",
  },
  {
    itemName: "pear",
    category: "fruit",
    price: 35,
    timestamp: "2023-10-12",
  },
  {
    itemName: "jackfruit",
    category: "fruit",
    price: 82,
    timestamp: "2023-08-12",
  },
  {
    itemName: "moongdal",
    category: "pulses",
    price: 122,
    timestamp: "2023-10-22",
  },
  {
    itemName: "rajma",
    category: "pulses",
    price: 92,
    timestamp: "2023-11-11",
  },
  {
    itemName: "chanadal",
    category: "pulses",
    price: 87,
    timestamp: "2023-09-16",
  },
  {
    itemName: "peanut",
    category: "legumes",
    price: 121,
    timestamp: "2022-11-12",
  },
  {
    itemName: "peas",
    category: "legumes",
    price: 85,
    timestamp: "2022-05-06",
  },
];

// console.log(categoryList(transactionList));
module.exports = calculateTotalSpentByCategory;
