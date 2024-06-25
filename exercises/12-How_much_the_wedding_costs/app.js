let guests = prompt('How many people are coming to your wedding?'); //Creo una variable con un cuadro de dialogo "prompt".

function getPrice(guests) { //Defino una función con un parámetro "guests"(cantidad de personas).
    let cost = 0; //Inicializamos el costo en 0.
    
    if (guests <= 50) { //Definimos los condicionales con las pautas dadas y el coste.
        cost = 4000
    } else if (guests <= 100) { //Si la condición anterior no se cumple pasa a la siguiente y así sucesivamente.
        cost = 10000
    } else if (guests <= 200) {
        cost = 15000
    } else { //Si ninguna condición se cumple se ejecuta esta.
        cost = 20000
    }
    return cost; //Retornamos el coste.
}

let price = getPrice(guests); //Guardamos la función con su argumento "guests" en una variable "price".
console.log('Your wedding will cost ' + price + ' dollars'); //Imprimimos el coste dependiendo de la cantidad de personas.
