function sing() { //Declaramos una función sin parámetros.
    let lyrics = ``; //Declaramos una variable "lyrics" y guardamos un "string" vacío.
    for (let i = 1; i <= 4; i++) { //Definimos un bucle "for" que ejecutará 4 iteraciones.
        lyrics += `let it be, `; //Agrega el string "let it be, " a lyrics en cada iteración.
    }
    lyrics += `there will be an answer, `; //Agrega este string a "lyrics"(1 vez ya que está fuera del bucle).
    for (let i = 1; i <= 5; i++) {
        lyrics += `let it be, `;
    }
    lyrics += `whisper words of wisdom, let it be`; //Agrega este string a "lyrics"(1 vez ya que está fuera del bucle).
    return lyrics;
}
console.log(sing()); //Imprimimos la función.