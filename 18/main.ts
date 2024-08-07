//Making a Array Of Countries And print Its Original Order
let countriesToVisit: string[]=["Egypt","Denmark","China","Brazil","Argentina"];
console.log("Orginal Order:", countriesToVisit);

//print the Array in Alphabatical Order
console.log("Alphabetical Order:", [...countriesToVisit].sort());

//Show that the Array is Stille In Orginal Order
console.log("Stille in Orginal Order", countriesToVisit);

//print the Array in Reverse Order without modifying the actual array list
console.log("Reverse Order", [...countriesToVisit].reverse());

//show that the Array is Stille in Orginal Order 
console.log("Stille in Orginal Order", countriesToVisit);

//We have Changed the orignal Order Now
console.log("Orignal Array Reverse", countriesToVisit.reverse());

//print the Array to show that it's Back to it's orignal order
console.log("back to Orignal Order", countriesToVisit.reverse());

//print the array to show that it's order has been changed in Alphabatical order Now
console.log("Shorted in Alphabatical Order",countriesToVisit.sort());

//we have change again the orignal array order Now in reverse order Again
console.log("Orignal Array Reverse",countriesToVisit.reverse());