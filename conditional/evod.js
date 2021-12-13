// program to check if the number is even or odd
// take input from the user
const ps = require("prompt-sync");
const prompt = ps();

const number = prompt("Enter a number: ");

//check if the number is even
if(number % 2 == 0) {
    console.log("The number is even.");
}

// if the number is odd
else {
    console.log("The number is odd.");
}