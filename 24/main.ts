//Define Veriable 
let apple = "apple"
let upperCaseApple = "APPLE"
let ten = 10;
let twenty = 20;
let fruits = ["apple","mangao","orange"];

//Test for equality and inequality with strings
console.log("is apple is equal to apple?");
console.log(apple == "apple");

console.log("\nis apple is not equal to apple?");
console.log(apple != apple);


//Test using upperCase Function
console.log("\nis APPLE is equal to apple after converting to lowercaase?");
console.log(upperCaseApple.toLowerCase()=="apple");

console.log("\nis APPLE is equal to apple after converting to uppercaase?");
console.log(upperCaseApple.toLowerCase() != "apple");

//numerical tests
//Equal to
console.log("\nis Ten is equal to twenty?");
console.log(ten == twenty);

//not equal to
console.log("\nis Ten is not equal to twenty?");
console.log(ten != twenty);

// greater test
console.log("\nis Ten is greater than zero?");
console.log(ten > 0)

//less test
console.log("\nis twenty is less than 10");
console.log(twenty < ten);

//greater than or equal to
console.log("\nis ten is greater than or equal to 5?");
console.log(ten >= 5);

//less than or Equal to
console.log("\nis twenty is less than or equal to 10");
console.log(twenty <= 10);


//Tests using "and" and "or" operators//
//using && ("And")
console.log("\ntwenty is not equal to ten and twenty is greater than 10");
console.log(twenty != ten && twenty > 10);


console.log("\ntwenty is not equal to ten and twenty is greater than 10");
console.log(twenty != ten && twenty > 30);

//using || ("Or")
console.log("\n 20 is greater than 50 OR 20 is equal to 20")
console.log(twenty > 50 || 20 == 20);

console.log("\n 20 is greater than 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);

//test whether an item is include in array
console.log("\n is orange include in my fruits array");
console.log(fruits.includes("orange"));

console.log("\n is orange  not inculde in my fruits array");
console.log(!fruits.includes("orange"));