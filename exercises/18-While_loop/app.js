function startCounting() { //Declaramos una función sin parámetros.
	let counter = 100; //Inicializamos el contador del bucle en 100.
	while (counter >= 0) { //Definimos la condición del bucle.
		console.log(counter); //Imprimimos el bucle.
		counter--; // Y por último hacemos un decremento de 1 para cada iteración (100,99,98...).
	}

	return counter; //Retornamos el valor de "counter".
}

startCounting(); //Llamamos a la función.