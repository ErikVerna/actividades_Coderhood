/* Reescribir la función programa del insiso anterior para que use async y await */

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

async function resolucion(){
const resultado = await dividirNumeros(10,5);
console.log("El resultado de la división es: " + resultado);

}

resolucion();