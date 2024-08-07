//Define the Function with a Rest parameters that accapt items arugments representing our Sandwish
function make_sandwich(...items : string[]){
    console.log("\n Making a Sandwich with following items :")
    items.forEach(singleItems => console.log("-" + singleItems));
    console.log("Now Enjoye Sandwich");
}

// Call the Function 3 items with 3 different  number of arugments
make_sandwich("Chiken",'Cheese',"Moyo","Egg");

make_sandwich("Bread","Butter");

make_sandwich("Bread","Butter","Egg","Moyo","Cheese","Chicken","Lettuce","Tomoto");