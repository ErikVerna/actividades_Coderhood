// 3) Contador 2: La venganza del contador
// Sea una variable numerica entera y positiva 'limite':
// Recorrer desde 0 hasta que se cumpla una de las siguientes condiciones:
// Se llega a limite
// La cantidad de numeros pares desde 0 hasta limite es mayor a una variable
// anteriormente creada llamada final
// Al final del recorrido imprimir la cantidad de numeros multiplos de 3
// Al final del recorrido imprimir la suma de todos los numeros entre el 0 hasta que se
// termine el recorrido

console.clear()
console.log("Bienvenid@s a Contador 2: La venganza del contador.")

let limite = 20;
let final = 10;
let multiplosde3 = 0;
let contadornumerosPares = 0;
let sumaFinal = 0;
let i = 0;


while (i < limite && contadornumerosPares < final){ // mientras que i sea mayor al limite ó el contador de numeros pares sea menor a la variable final
    if(i % 2 === 0) {           // si I es numero par
        contadornumerosPares++ // sumar contadordenumerospares
    }
    if (i % 3 === 0){          // si I es numero impar
        multiplosde3++         // sumar a multiplos de 3
    }
    sumaFinal += i // es lo mismo que poner = sumafinal = sumaFinal + i
    i++ // i = i + 1
    
}

console.log("La cantidad de numeros multplos de 3 es:", multiplosde3)
console.log("La cantidad de numeros entre el 0 hasta el final del recorrido es:", sumaFinal)