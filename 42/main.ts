function show_magician (magician : string[]){
    magician.forEach(name => console.log(name))
}

// function to makme magician great throught.map() it will maodify array
function make_greet (magician : string[]){
    return magician.map(name => `The Great ${name}`)
}
// define an array of magician name
let magician_names = ["Herry poter" ,"waseem","Salal"]

//call make_greet function to modify magician names
let greet_magician = make_greet(magician_names);

//call show_magician that show modified list of magicians
show_magician(greet_magician);