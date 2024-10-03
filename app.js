// app.js

import { greetUser, milesToKilometers, calculateAverage, isPalindrome, isNumeric, factorial } from './utilities.js';

// Example usage of the functions
greetUser('Manjot', 'Kaur');  //  function to greet user

const distanceInMiles = 200;
const kilometers = milesToKilometers(distanceInMiles);  // Convert miles to kilometers
console.log(`${distanceInMiles} miles is equal to ${kilometers.toFixed(2)} kilometers`);

const numbers = [101, 201, 301, 401, 501];
const average = calculateAverage(numbers);  // Calculate the average of an array
console.log(`The average of [${numbers.join(', ')}] is ${average}`);


const wordToCheck = 'BORROW OR ROB';
const palindromeCheck = isPalindrome(wordToCheck);
console.log(`Is "${wordToCheck}" a palindrome? ${palindromeCheck ? 'Yes' : 'No'}`);

const numericCheck = isNumeric('12345');  // Check if a string is numeric
console.log(`Is "12345" numeric? ${numericCheck ? 'Yes' : 'No'}`);

const factorialValue = 8;
console.log(`Factorial of ${factorialValue} is ${factorial(factorialValue)}`);
