function greet(name) {
  return `Hello, your name is ${name}!`;
}

module.exports = greet;

if (require.main === module) {
  console.log(greet("World"));
}
