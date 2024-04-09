// Import the readline module
const readline = require('readline');

// Create an interface for reading input from the user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Welcome instructions
console.log("Welcome to the Discount-Double Checker");
console.log("I will ask you the price of 2 items and determine if you get a discount");

// Initialize variables
let item1 = 0;
let item2 = 0;

// Get input from the user
rl.question("Cost of First Item (in $): ", (answer) => {
  item1 = parseFloat(answer);

  rl.question("Cost of Second Item (in $): ", (answer) => {
    item2 = parseFloat(answer);

    let x = item1 + item2;

    // Show results in console
    console.log(`First Item Cost: $${item1}`);
    console.log(`Second Item Cost: $${item2}`);

    // Get discount and print results
    if (x > 100) {
      let discount = parseFloat((item1 + item2) * 0.1);
      x = x - discount;
      console.log(`Your total purchase is $${x}, which includes your 10% discount.`);
    } else if (x < 100 && x > 50) {
      let discount = parseFloat((item1 + item2) *.05);
      x = x - discount;
      console.log(`Your total purchase is $${x}, which includes your 5% discount.`);
    } else {
      console.log(`Your total purchase is $${x}.`);
    }

    // Close the readline interface
    rl.close();
  });
});