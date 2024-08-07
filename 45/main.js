// //Define a Function to create a Car object with optional Option.
// function create_car(manufacturer : string, model: string, ...options:any ){
//     let car ={
//         manufacturer:manufacturer,
//         model:model,
//     };
function create_car(manufacture, model, optional) {
    return {
        manufacture,
        model,
        ...optional
    };
}
const my_car = create_car("Toyota", "Corolla", { color: "Black", year: "2024" });
console.log(my_car);
export {};
