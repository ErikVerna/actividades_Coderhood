//Variables a utilizar
let a = 1
let b = 4
let c = 5 
let d = 6
let e = 3
let f = 5

let suma;

//Como funciona Function -- Num1 y Num2 son parametros
// function sumador(num1,num2){
//     let numsum = num1 + num2

//     return numsum
// }
// console.log(sumador(20,51))

// console.log(sumador(12,51))

// console.log(sumador(1,51))

// Funcion para sacar el numero maximo entre 2 valores
function numeroMaximo(val1,val2){
    if (val1 > val2){
        return val1;
     } else {
        return val2
    }
 

}
console.log("El numero maximo es: " + numeroMaximo(15,252))
//sin funciones

suma = a+b;
console.log(suma);

suma = c+d;
console.log(suma);

suma = e+f;
console.log(suma);

//con funciones

function sumarNumeros(numero1,numero2){
let sumaTotal = numero1 + numero2
console.log(sumaTotal);
}


sumarNumeros(a,b)
sumarNumeros(c,d)
sumarNumeros(e,f)