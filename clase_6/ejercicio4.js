// 4. Silabas
// Nuestro software de reconocimiento 
// de voz funciona de una forma un poco particualar, y
//  el texto reconocido nos lo envía en un arreglo de silabas. 
//  Dado el siguiente array, obtener un string con todo el texto de corrido.

const silabas = ["¡Ho", "la, ", "mun", "do! ", "¿To", "do ", "bien?", " Me ", "a", "le", "gro."]

function sumasStrings (strings, element) {
        return strings + element 
}

const frase = silabas.reduce(sumasStrings)

console.log(frase)


