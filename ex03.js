// Exercise 3: Write a function named 'getFullNames' that takes an array of user objects (each with 'firstName' and 'lastName' properties) and returns an array of full names (e.g., 'John Doe').

function getFullNames(users) {
  return users.map((user) => `${user.firstName} ${user.lastName}`);
}

console.log(
  getFullNames([
    { firstName: "John", lastName: "Doe" },
    { firstName: "Jane", lastName: "Doe" },
  ])
); // ['John Doe', 'Jane Doe']
