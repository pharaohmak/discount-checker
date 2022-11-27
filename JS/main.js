/** Problem #1 - Discount Double-Check */


// welcome instructions
alert("Welcome to the Discount-Double Checker")
alert("I will ask you the price of 2 items and determine if you get a discount")

// initialize variables
item1 = parseFloat(prompt("Cost of First Item (in $)"));
item2 = parseFloat(prompt("Cost of Second Item (in $)"));

let x = item1 + item2

// show results in html
document.querySelector('.item-1').innerHTML = "First Item Cost: $" + item1;
document.querySelector('.item-2').innerHTML = "Second Item Cost: $" + item2;

//get discount and print results
if (x > 100) {
    discount = parseFloat((item1 + item2) * 0.1);
    x = x - discount;
    document.querySelector('.total').style.background = "green";
    document.querySelector(".total").innerHTML = "Your total purchase is $" + x + ", which includes your 10% discount.";

    console.log("Your total purchase is $" + x + ", which includes your 10% discount.")
} else if (x < 100 && x > 50) {
    discount = parseFloat((item1 + item2) * .05);
    x = x - discount
    document.querySelector('.total').style.background = "green";
    document.querySelector(".total").innerHTML = "Your total purchase is $" + x + ", which includes your 5% discount."

    console.log("Your total purchase is $" + x + ", which includes your 5% discount.")
} else {
    document.querySelector('.total').style.background = "yellow";
    document.querySelector(".total").innerHTML = "Your total purchase is $" + x + "."
    console.log("Your total purchase is $" + x + ".")
}




/** Problem #2 – Last Gas Station For Miles */

// welcome instructions
alert("I will ask a few questions about your car and detrime if you need to stop for gas")

//initialize variables 
tankSize = parseFloat(prompt("What is the maximum number of gallons your car tank holds?"))
fuelLevel = parseFloat(prompt("How full is your gas tank? (in %)"))
mpg = parseFloat(prompt("How many miles per gallon does your car get?"))

// Calculate the number of miles their car can go with their current amount of gas in their tank.
let distance = ((fuelLevel / tankSize) * 100) / mpg

if(distance >= 200){
    document.querySelector('.txt-btn').addEventListener("click", function (e) {
        document.querySelector('.txt-results').innerHTML = `Yes, you can drive ${distance} miles and you can make it without stopping for gas!`
    });
document.querySelector('#img-btn').addEventListener("click", function (e) {
    document.querySelector('#img-result').src = '/IMG/enoughGas.jpg'
});
} else {
    document.querySelector('.txt-btn').addEventListener("click", function (e) {
        document.querySelector('.txt-results').innerHTML = `You can only drive ${distance} miles more, better get gas now while you can!`
    });
    document.querySelector('#img-btn').addEventListener("click", function (e) {
        document.querySelector('#img-result').src = '/IMG/notEnoughGas.jpg'
    });
} 

