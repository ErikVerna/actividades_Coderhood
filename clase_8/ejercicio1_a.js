// Reescribir la siguiente función tal que retorne una promesa que se cumpla luego 
// de 3 segundos (usar setTimeout), devolviendo el mismo resultado que la función dada.

 function dividirNumeros(dividendo, divisor) {
    return new Promise(function(resolve, reject) {
        try {
            setTimeout(() => {
                resolve(dividendo / divisor); 
            }, 3000);
        } catch (error) {
            reject(error);
        }
    })
}

function exitosa(resultado) {
    console.log("El resultado es: " + resultado);
}

function fallo(falla){
    console.log("Lo sentimos, ha ocurrido un error: " + falla);
}

const resultadoFinal = dividirNumeros(8,2)
resultadoFinal.then(exitosa).catch(fallo)
