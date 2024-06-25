let total = prompt('How many km are left to go?'); //Declaramos una variable con la función "prompt" que muestra el texto.
total = parseInt(total); //Convertimos "total" en un númerom entero con "parseInt". Sino lo puede convertir arrojará un error.

if (total > 100) { //Definimos un bucle y si "total" es mayor que 100, se ejecuta este bloque.
    console.log(`We still have a bit of driving left to go`);//Se imprime esto en la consola si la condición es "true".
} else if (total > 50) { //Si la condición anterior no se cumple se ejecuta esta.
    console.log(`We'll be there in 5 minutes`);
} else { //Si ninguna condición es "true" se ejecuta esta.
    console.log(`I'm parking. I'll see you right now`);
}
