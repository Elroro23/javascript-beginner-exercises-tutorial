function bottlesOfMilk() { //Definimos una función sin parámetros.
    for (let i = 99; i >= 0; i--) { //Definimos un bucle que ejecutará 100 iteraciones(del 99 al 0).
        if (i > 2) { //Si i es mayor que dos, se imprime la letra(${i - 1} le resta uno al total de botellas en ese momento).
            console.log(`${i} bottles of milk on the wall, ${i} bottles of milk. Take one down and pass it around, ${i - 1} bottles of milk on the wall.`);
        } else if (i === 2) { //Si i es estrictamente igual a 2 se imprime la letra.
            console.log(`2 bottles of milk on the wall, 2 bottles of milk. Take one down and pass it around, 1 bottle of milk on the wall.`);
        } else if (i === 1) { //Y si es estrictamente igual a 1, se imprime esta letra.
            console.log(`1 bottle of milk on the wall, 1 bottle of milk. Take one down and pass it around, no more bottles of milk on the wall.`);
        } else { //Cuando la iteración sea 0 se imprime la siguiente letra.
            console.log(`No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.`);
        }
    }
}
bottlesOfMilk() //Llamamos a la función.
