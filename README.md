# Discount-Double Checker

This Node.js application calculates and displays the total cost of two items, determining if the user qualifies for a discount based on predefined criteria.

## Features

- **Interactive Input:** Uses `readline` module to interactively prompt users for input.
- **Discount Calculation:** Determines if a discount applies based on the total cost of two items.
- **Console Output:** Displays detailed results including item costs, applicable discounts, and final purchase total.

## Usage

1. **Installation:**
   - Ensure Node.js is installed on your system.

2. **Setup:**
   - Clone this repository to your local machine.

3. **Running the Application:**
   - Open a terminal or command prompt.
   - Navigate to the project directory.
   - Run `node discountDoubleChecker.js`.

4. **Input Instructions:**
   - Follow the prompts to enter the cost of the first item.
   - Enter the cost of the second item when prompted.

5. **Output:**
   - The application will calculate the total cost.
   - If the total exceeds $100, a 10% discount is applied.
   - If the total is between $50 and $100, a 5% discount is applied.
   - Final results, including item costs and any applicable discounts, will be displayed in the console.

6. **Closing the Application:**
   - The application will close automatically after displaying the results.

## Example

Welcome to the Discount-Double Checker
I will ask you the price of 2 items and determine if you get a discount

Cost of First Item (in $): 50
Cost of Second Item (in $): 60

First Item Cost: $50
Second Item Cost: $60
Your total purchase is $105, which includes your 10% discount.