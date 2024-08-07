//making a function
function make_shirt (size :string = "large",printShirt : string = "I Love Typescript"){
    console.log(`Creating a ${size} shirt with the ${printShirt} prints on shirt`);
}
//calling a function by default values
make_shirt();

//Calling a function now with medium size and default message 
make_shirt("Medium")

//Calling a function now with small size and default message
make_shirt("small","I Love JavaScript")