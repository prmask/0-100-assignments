const isAnagram = require("./anagram");
const categoryList = require("./expenditure-analysis");
const largest = require("./findLargestElement");

// Check if the input is anagram
console.log(isAnagram("werty  sdfg xcvb", "bvcx gfds trew"));

// Sample input data
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

// Category output list in required format
console.log(categoryList(transactionList));

// Find the largest array quantity
console.log(largest([3, 7, 2, 9, 1]));
