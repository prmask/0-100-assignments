/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter and return a list of objects where each object is unique category-wise and has total price spent as its value.
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

  // Convert the categoryTotals object into an array of objects
  const result = Object.entries(categoryTotal).map(([category, total]) => ({
    category: category,
    totalSpent: total,
  }));

  return result;
}

module.exports = calculateTotalSpentByCategory;
