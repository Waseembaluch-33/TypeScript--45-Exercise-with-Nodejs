"use strict";
//Creating a guest List array
let guestList = ["Waseem", "Hasinain", "Haseeb", "Haider"];
//Making variable for those guest whho cant Come
let dontCome = guestList[0];
//Print the Name of guest who cant come  
console.log(dontCome, "Nahi ha skta");
//Add or remove values from Guest List array
guestList.splice(0, 1, "Bilal");
//Message Print to bigger table
console.log("Good News ! We have Found a Bigger Table For Dinner.");
//Adding a new Guest at starting index of array
guestList.unshift("Amir");
//Adding a new guest at ending index of array
guestList.push("Zain");
//making a variable for storing a middle index of our guest list array
let middleIndex = Math.floor(guestList.length / 2);
//Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Ali");
//print message of updated list
console.log("Updated List of our Guests");
//sending a invitation message to our guest one by one with thier names
guestList.forEach(oneGuest => console.log(`Asslamualikum ${oneGuest} Would you Like to Dinner With me`));
