let guestList = ["waseem","Hasnain","Haseeb","Haider"]
let dontCome = guestList[0]
console.log(dontCome, "nahi ha Skta");
guestList.splice(0 , 1, "Jawwad");
guestList.forEach(guest => console.log(`Assalamualikum ${guest} would you like to Dinner with me?`));
