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