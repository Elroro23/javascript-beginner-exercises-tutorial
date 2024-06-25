var person = {
    name: "John",                //String
    lastName: "Doe",
    age: 35,                     //Number
    gender: "male",
    luckyNumbers: [7, 11, 13, 17], //Array
    significantOther: person2   //Object, yes, the same variable/object defined after
};

var person2 = {
    name: "Jane",
    lastName: "Doe",
    age: 38,
    gender: "female",
    luckyNumbers: [2, 4, 6, 8],
    significantOther: person
};

var family = {
    lastName: "Doe",
    members: [person, person2]   //Array of objects, don't forget to add Jimmy
};


function addAllFamilyLuckyNumbers(anArray) {
    let sumOfAllLuckyNumbers = 0; //Inicializamos la suma a 0.
for (let i = 0; i < anArray.length; i++){ //Recorremos cada miembro de la familia con ".length".
    let member = anArray[i]; //Accedemos al miembro actual del array.
for(let j = 0; j < member.luckyNumbers.length; j++){  //Anidamos el bucle y recorremos cada número de la suerte del miembro actual.
    sumOfAllLuckyNumbers += member.luckyNumbers[j]; //Sumamos el número de la suerte a la suma total.
}
}
    

    return sumOfAllLuckyNumbers;
}


person.luckyNumbers[3] = 33; //Cambiamos el 4to número de la suerte de "person" a "33".
function addFamilyMember(family) { //Definimos una función con un parámetro.
    let newMember = { //Creamos un objeto con el nuevo miembro de "family".
        name: `Jimmy`, //Especifícamos todos los datos del nuevo miembro.
        lastName: `Doe`,
        age: 13,
        gender: 'male',
        luckyNumbers: [1, 2, 3, 4],
        significantOther: null
    };
    family.members.push(newMember); //Accedemos al objeto "members" de la variable "family" y agregamos a "newMember" con el método ".push()".
}
addFamilyMember(family);
console.log(addAllFamilyLuckyNumbers(family.members));  //Llamamos e imprimimos la función.
