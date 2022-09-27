// Write your code in methods.rb. Run learn test, and use the tests along with the code in js/index.js to guide your work.

// Define a method #greet_programmer that takes no arguments. It should output the string "Hello, programmer!" to the terminal with #puts.

// Define a method #greet that takes one argument, a name. It should output the string "Hello, name!" (with "name" being whatever value was passed as an 
// argument) to the terminal with #puts.

// Define a method #greet_with_default that takes one argument, a name. It should output the string "Hello, name!" (with "name" being whatever value was 
// passed as an argument) to the terminal with #puts. If no arguments are passed in, it should output the string "Hello, programmer!".

// Define a method #add that takes two numbers as arguments and returns the sum of those two numbers.

// Define a method #halve that takes one number as an argument and returns the that number's value, divided by two. If the argument is not an integer, it 
// should return nil and not throw an error.

/*
  You should be able to call this function with no arguments and see its output in the terminal:
  greetProgrammer();
  => "Hello, programmer!"
*/
function greetProgrammer() {
  console.log("Hello, programmer!");
}

/*
  You should be able to call this function with one argument and see its output in the terminal:
  greet("Naureen");
  => "Hello, Naureen!"
*/
function greet(name) {
  console.log(`Hello, ${name}!`);
}

/*
  You should be able to call this function with no arguments and see its output in the terminal:
  greetWithDefault();
  => "Hello, programmer!"
  
  You should also be able to call this function with one argument and see its output in the terminal:
  greetWithDefault("Sunny");
  => "Hello, Sunny!"
*/
function greetWithDefault(name = "programmer") {
  console.log(`Hello, ${name}!`);
}

/*
  You should be able to call this function with two arguments and get back its return value:
  const sum = add(1, 2);
  console.log(sum);
  => 3
*/
function add(num1, num2) {
  return num1 + num2;
}

/*
  You should be able to call this function with two arguments and get back its return value:
  const result = halve(4);
  console.log(result);
  => 2

  If the function is called with an argument that isn't a number, it should return null:
  const result = halve("two")
  => null
*/
function halve(number) {
  if (typeof number !== "number") return null;

  return number / 2;
}
