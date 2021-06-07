// 2. Hacer una función que reciba una serie de palabras separadas por espacios y que imprima
// la misma frase pero en orden inverso.

// function palabras(p1,p2,p3) {

//  return p3 + " " + p2 + " " + p1

// }

// console.log(palabras("hola" ,"whatsana","no cap"))


function invertirFrase(frase){

    let palabra = ""

    for (let i = frase.length - 1; i >= 0; i--){
        palabra += frase[i]
        
    }
    return palabra

}
console.log(invertirFrase("alucard")) // dracula