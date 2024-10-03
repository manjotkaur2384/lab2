// utilities.js

// Function to greet the user
export function greetUser(firstName, lastName) {
    console.log(`Hello ${firstName} ${lastName}, welcome to our NODE.JS LAB2`);
}

// Function to convert miles to kilometers
export function milesToKilometers(miles) {
    return miles * 1.60934;  // 1 mile = 1.60934 kilometers
}

// Function to calculate the average of an array of numbers
export function calculateAverage(numbers) {
    const sum = numbers.reduce((total, num) => total + num, 0);
    return sum / numbers.length;  // Calculate average
}

// Function to check if a word is a palindrome
export function isPalindrome(word) {
    const cleanedWord = word.toLowerCase().replace(/[^a-z0-9]/g, ''); // Remove non-alphanumeric characters and convert to lowercase
    const reversedWord = cleanedWord.split('').reverse().join(''); // Reverse the cleaned word
    return cleanedWord === reversedWord; // Check if cleaned word is the same as reversed word
}

// Function to check if a string contains only digits
export function isNumeric(value) {
    return /^\d+$/.test(value);  // Check if the string is numeric
}

// Function to calculate the factorial of a number
export function factorial(n) {
    if (n < 0) return undefined;  // Factorial not defined for negative numbers
    return n === 0 ? 1 : n * factorial(n - 1);  // Recursive calculation
}
