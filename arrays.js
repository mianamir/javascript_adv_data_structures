var cars = ["Saab", "Volvo", "BMW"];

var cars = new Array("Saab", "Volvo", "BMW");

var name = cars[0];

cars[0] = "Opel";

var x = cars.length;   // The length property returns the number of elements
var y = cars.sort();   // The sort() method sorts arrays

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.length;   // the length of fruits is 4

fruits = ["Banana", "Orange", "Apple", "Mango"];
var first = fruits[0];

fruits = ["Banana", "Orange", "Apple", "Mango"];
var last = fruits[fruits.length - 1];


var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Lemon");    // adds a new element (Lemon) to fruits

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Lemon";    // adds a new element (Lemon) to fruits

// Associative Arrays
/**
Many programming languages support arrays with named indexes.

Arrays with named indexes are called associative arrays (or hashes).

JavaScript does not support arrays with named indexes.

In JavaScript, arrays always use numbered indexes.  
 
 */

var person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
var x = person.length;     // person.length will return 3
var y = person[0];         // person[0] will return "John"

/**
The Difference Between Arrays and Objects
In JavaScript, arrays use numbered indexes.  
In JavaScript, objects use named indexes.


When to Use Arrays. When to use Objects.
JavaScript does not support associative arrays.
You should use objects when you want the element names to be strings (text).
You should use arrays when you want the element names to be numbers.

Avoid new Array()

There is no need to use the JavaScript's built-in array constructor new Array().

Use [] instead.
*/
var points = new Array();     // Bad
var points = [];              // Good 

var points = new Array(40, 100, 1, 5, 25, 10); // Bad
var points = [40, 100, 1, 5, 25, 10];          // Good

// How to Recognize an Array

var fruits = ["Banana", "Orange", "Apple", "Mango"];

typeof fruits;    // returns object

Array.isArray(fruits);   // returns true

function isArray(x) {
    return x.constructor.toString().indexOf("Array") > -1;
}

var fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits instanceof Array;   // returns true

/**
Array.map()
The map() method creates a new array by performing a function on each array element.

The map() method does not execute the function for array elements without values.

The map() method does not change the original array.

 */

var numbers = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(mapFunction);

function mapFunction(value, index, array) {
  return value * 2;
}

var over18 = numbers.filter(filterFunction);

function filterFunction(value, index, array) {
  return value > 18;
}

var sum = numbers1.reduce(myFunction);

function reduceFunction(total, value, index, array) {
  return total + value;
}

// Array.every()
// The every() method check if all array values pass a test.
var allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

// Array.some()
// The some() method check if some array values pass a test.

var someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

// Array.indexOf()
// The indexOf() method searches an array for an element 
// value and returns its position.

var fruits = ["Apple", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple");

// Array.lastIndexOf()
// Array.lastIndexOf() is the same as Array.indexOf(), but returns the position
//  of the last occurrence of the specified element.

var fruits = ["Apple", "Orange", "Apple", "Mango"];
var a = fruits.lastIndexOf("Apple");

// Array.find()
// The find() method returns the value of the first array element that passes
//  a test function.

var numbers = [4, 9, 16, 25, 29];
var first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}




