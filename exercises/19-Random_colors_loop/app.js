function getColor(colorNumber = 0) { //Definimos una funcíon con su parámetro, sino se le da un valor por defecto será 0.

	colorNumber = parseInt(colorNumber); //Convertimos "colorNumber" en un entero con "parseInt".
	switch (colorNumber) { //Usamos "switch" para comparar "colorNumber"
		case 1: return "red"; //Si "colorNumber" es 1 devuelve "red".

		case 2: return "yellow";

		case 3: return "blue";

		case 4: return "green";

		default: return "black"; //Si "colorNumber" no es ninguno de los números asignados devuelve "black".

	}
}
function getAllStudentColors() { //Definimos una función que no acepta parámetros.
	for (let i = 0; i < 10; i++) { //Utilizamos un bucle "for" que se ejecuta 10 veces, "i" se incrementa de 0 a 9 (10 iteraciones).
		let colorRandomNumber = Math.floor(Math.random() * 4) + 1; //Generamos un número random entre 1 y 4 por cada iteración del bucle.
		let exampleColor = getColor(colorRandomNumber); //El número generado en "colorRandomNumber" se pasa como parámetro a la función "getColor" que está guardada en "exampleColor".
		console.log(exampleColor); //Imprimimos la variable "exampleColor".
	}
}
getAllStudentColors(); //Llamamos a la función.

