//Creating a guest List array
let  guestList = ["Waseem","Hasinain","Haseeb","Haider"];

//Making variable for those guest whho cant Come
let dontCome = guestList[0];

//Print the Name of guest who cant come  
console.log(dontCome, "Nahi ha skta");

//Add or remove values from Guest List array
guestList.splice(0 , 1, "Bilal");

//Message Print to bigger table
console.log("Good News ! We have Found a Bigger Table For Dinner.");

//Adding a new Guest at starting index of array
guestList.unshift("Amir");

//Adding a new guest at ending index of array
guestList.push("Zain");

//making a variable for storing a middle index of our guest list array
let middleIndex: number = Math.floor(guestList.length / 2);

//Adding a new guest to middle index of array
guestList.splice(middleIndex, 0 ,"Ali");

//print message of updated list
console.log("Updated List of our Guests");

//sending a invitation message to our guest one by one with thier names
guestList.forEach(oneGuest => console.log(`Asslamualikum ${oneGuest} Would you Like to Dinner With me`));

//inform that only two guest can be invited for Dinner
console.log("Unfortunately, the new dinner table wont arrive on time, so i can only invite two Guests to Dinner with me")

//using while-Loop to remove Guests From the Array until only two Names remain
while(guestList.length > 2){
    let removeGuest =guestList.pop();
    console.log(`Sorry ${removeGuest} I Cant Invite To Dinner`);
}

//Sending a invitation last Two Guest on the List
console.log("Invitation to the last Two Guest");

guestList.forEach(lastTwo => console.log(`Luckly ${lastTwo} You Are Stille Invited To Dinner`));

//removing last two guest from The list
guestList.pop();
guestList.pop();

console.log("Empty List:", guestList);