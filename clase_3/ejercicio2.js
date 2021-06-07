// 2) Contador
// Sea una variable numerica entera y positiva 'limite':
// Recorrer desde 0 hasta limite
// Imprimir al final del programa la cantidad de numeros impares
// Imprimir al final del programa la cantidad de numeros menores de limite / 2

let limite = 25;
let impar = 0;
let menores = 0;

for (let i = 0; i <= limite;i++) {
    if (i % 2 != 0) {
        
        impar++
    }
    if (i < limite / 2) {
        
        menores++
    }
    
}

console.log(impar)
console.log (menores)







