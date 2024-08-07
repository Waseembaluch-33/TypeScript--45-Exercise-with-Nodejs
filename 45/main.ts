
type car = {
    manufacture : string
    model : string
    [key : string]: any;
}

function create_car(manufacture : string , model : string , optional : Record<string,any>):car{
    return{
        manufacture,
        model,
        ...optional
    }
}

const my_car: car = create_car("Toyota","Corolla", {color : "Black", year :"2024"})
console.log(my_car)