function fizzBuzz() { //Definimos una función sin parámetros
	for (let myNumber = 1; myNumber <= 100; myNumber++) { //Definimos un  bucle "for" que recorre del 1 al 100.
		if (myNumber % 3 === 0 && myNumber % 5 === 0) { //Definimos los condicionales para saber si los números son múltiplos.
			console.log(`FizzBuzz`); //Imprimimos el mensaje en cada múltiplo.
		}
		else if (myNumber % 3 === 0) {
			console.log(`Fizz`);
		}
		else if (myNumber % 5 === 0) {
			console.log(`Buzz`);
		}
		else { //Si el número no es multiplo no se muestra nada.
			console.log(myNumber);
		}

	}
}

fizzBuzz(); //Llamamos a la función.