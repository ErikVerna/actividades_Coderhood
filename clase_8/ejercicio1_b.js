// Ejercicio 1 - b
// Usando then y catch completar la función "programa" dada para llamar a dividirNumeros e imprimir el resultado 
// o imprimir un mensaje de error si ocurriera. Para provocar un error pueden enviar 0 como divisor.

function dividirNumeros(dividendo, divisor) {
    return new Promise(function(resolve, reject) {
        try {
            setTimeout(() => {
                if (divisor > 0) {
                    resolve(dividendo / divisor); 
                } else {
                    reject("SyntaxError: No es posible dividir por 0");
                }
            }, 3000);
        } catch (error) {
            reject(error);
        }
    })
}

function programa(num1, num2) {
    // Tu código acá.
    return new Promise(function(resolve, reject) {
        try {
            resolve(dividirNumeros(num1,num2))
        } catch (error) 
            {
                reject()
            }
        
    })

}

function exitosa(resultado) {
    console.log("El resultado es: " + resultado);
}

function fallo(falla){
    console.log("Lo sentimos, ha ocurrido un error: " + "\n" + falla);
}


programa(10,0).then(exitosa).catch(fallo)
