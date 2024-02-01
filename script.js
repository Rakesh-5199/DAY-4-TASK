// Do the below programs in anonymous function & IIFE
a.Print odd numbers in an array
// Using Anonymous Function
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let printOddNumbers = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);


// Using IIFE (Immediately Invoked Function Expression)
(function(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
        console.log(arr[i]);

b.
// Using Anonymous Function
let stringArray = ["apple", "banana", "cherry", "date"];

let convertToTitleCaps = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
};

// Using IIFE (Immediately Invoked Function Expression)
(function(arr) {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
C.
// Using Anonymous Function
let numbers = [1, 2, 3, 4, 5];

let sumOfNumbers = function(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  

// Using IIFE (Immediately Invoked Function Expression)
let sum = (function(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
d.
// Using Anonymous Function
  for (let i = 2; i <= Math.sqrt(num); i++) {
  if (num % i === 0) {
      return false;
 

// Using IIFE (Immediately Invoked Function Expression)
let primes = (function(arr) {
  let isPrime = function(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
 e.Return all the palindromes in an array
 const getPalindromes = function(arr) {
    return arr.filter(word => word === word.split('').reverse().join(''));
};

const wordsArray = ["level", "hello", "racecar", "world", "madam"];
const palindromes = getPalindromes(wordsArray);
console.log(palindromes);
f.
const median = (function(arr1, arr2) {
    const combinedArray = [...arr1, ...arr2].sort((a, b) => a - b);
    const midIndex = Math.floor(combinedArray.length / 2);

g.
const uniqueArray = (function(arr) {
    return Array.from(new Set(arr));
})([1, 2, 2, 3, 4, 4, 5]);

console.log(uniqueArray);
h.
const rotatedArray = (function(arr, k) {
    const n = arr.length;
    k = k % n; 

 



2. Do the below programs in arrow functions.

a.const printOddNumbers = (arr) => {
    arr.forEach(num => {
        if (num % 2 !== 0) {
            console.log(num);

b.const convertToTitleCaps = (stringArray) => {
    return stringArray.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
};

c.const sumOfNumbers = (numbersArray) => numbersArray.reduce((acc, num) => acc + num, 0);

d.const isPrime = num => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;

};

e.const isPrime = num => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};
f.const isPalindrome = str => str === str.split('').reverse().join('');

const getPalindromes = array => array.filter(word => isPalindrome(word));







