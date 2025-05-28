// Exercise 5: Write a function named 'groupByCategory' that takes an array of product objects and returns an object where the keys are categories and the values are arrays of products in those categories.

function groupByCategory(products) {
  if (products.length === 0) return {};

  return products.reduce((sorted, product) => {
    const category = product.category;

    if (!sorted[category]) {
      sorted[category] = [];
    }

    sorted[category].push(product);

    return sorted;
  }, {});
}

console.log(
  groupByCategory([
    { name: "Apple", category: "Fruit" },
    { name: "Carrot", category: "Vegetable" },
    { name: "Banana", category: "Fruit" },
  ])
); // { Fruit: [{ name: 'Apple', category: 'Fruit' }, { name: 'Banana', category: 'Fruit' }], Vegetable: [{ name: 'Carrot', category: 'Vegetable' }] }
