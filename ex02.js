// Exercise 2: Write a function named 'filterByCategory' that takes an array of product objects and a category string, and returns a new array with products that belong to the given category.

function filterByCategory(products, category) {
  return products.filter((product) => product.category === category);
}

console.log(
  filterByCategory(
    [
      { name: "Apple", category: "Fruit" },
      { name: "Carrot", category: "Vegetable" },
    ],
    "Fruit"
  )
); // [{ name: 'Apple', category: 'Fruit' }]
