let firePosition = 1; //Definimos la posición de la bala en una variable.


const spinChamber = () => { //Definimos una función flecha sin parámetros.
    let chamberPosition = Math.floor((Math.random() * 6) + 1); //Generamos un número entero entre 1 y 6.
    return chamberPosition; //Retornamos el resultado de "chamberPosition".
};


const fireGun = (bulletPosition) => { //Definimos una función flecha con un parámetro sin valor.
    if(bulletPosition === firePosition){ //Comparamos "bulletPosition" con "firePosition" (posición de la bala).
        return (`You're dead!`); //Retornamos un mensaje si la condición se cumple.
    }else{ //Y sino se cumple retornamos otro mensaje.
        return (`Keep playing!`);
    }

};
let result = fireGun(spinChamber); //Llamamos a la función "fireGun" con "spinChamber" como valor(se ejecuta primero esta función).

console.log(fireGun(spinChamber())); //Imprimos el resultado de la operación.
