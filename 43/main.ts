//Define the function to show Magicians names
function show_magician(Magicians : string[]){
    Magicians.forEach(name => console.log(name))
}

//Function to make magician great through .map() it will modifiy array
function make_great(magician:string[]){
    return magician.map(name => `The Great ${name}`)
}

// Define an array of magician name
let magician_name = ["Herry Poter","Waseem","Salal"];

//Making a copy of Original array through .slice() Function
let copy_magician = magician_name.slice();

//Modify the copied array to include "The great" with their names
let copy_great_magicians = make_great(copy_magician);

//Show both arrays Original And Copied

//Original
console.log("\nOriginal Array")
show_magician(magician_name)

//Copied Array
console.log("\n Copied Array");
show_magician(copy_great_magicians);
