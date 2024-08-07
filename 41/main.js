//Define a Function to print each magician name from an array
function show_magician(magician) {
    magician.forEach(name => console.log(name));
}
//define an array containing magician name
let magician_name = ["Herry poter", "waseem", "Wahab", "salal"];
//call the function to print each magician name
show_magician(magician_name);
export {};
