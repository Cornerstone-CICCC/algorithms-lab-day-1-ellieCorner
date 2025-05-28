// Exercise 19: Write a function named 'flattenObject' that takes a nested object and returns a new object with no nested properties.

function reculsiveFlat(result, current, path) {
  for (const key in current) {
    const resultPath = path ? `${path}.${key}` : key;
    const value = current[key];

    if (typeof value === "object") {
      reculsiveFlat(result, value, resultPath);
    } else {
      result[resultPath] = value;
    }
  }
}

function flattenObject(obj) {
  const result = {};
  reculsiveFlat(result, obj, "");

  return result;
}

console.log(flattenObject({ a: { b: { c: 1 } }, d: 2 })); // { 'a.b.c': 1, d: 2 }
