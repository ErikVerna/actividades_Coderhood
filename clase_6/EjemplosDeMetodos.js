// .forEach
// Primera forma

// const arr1= ["a", "b", "c"];

// function imprimirElemento(element, index) {
//   console.log(`En la posición ${index} se encuentra el elemento ${element}`)
// }

// arr1.forEach(imprimirElemento)

//Segunda forma (definir la funcion dentro del forEach)

// arr1.forEach(function(element, index) {
//         console.log(`En la posición ${index} se encuentra el elemento ${element}`)

// })

// --------------------------------------------------------------------
// .map (retorna un nuevo array sin modificar el original)

// const arr1 = [1,2,3]

// function transformarElemento(element) {
//     return element.toString();
// }

// const arr2 = arr1.map(transformarElemento)

// console.log(arr1)
// console.log(arr2)

//--------------------------------------------------------------------
// .filter (sub-array que contenga solo los elementos que cumplan una condición)

// const arr1= [11, 2, 4, 20, 4, 10, 99 , 1, 3]

// function elementoMayorADiez(element) {
//     return element > 10
// }

// const arr2= arr1.filter(elementoMayorADiez)

// console.log(arr1)
// console.log(arr2)

//-------------------------------------------------------------------
// .find (buscar un elemento en un array)

// const arr1 = ["qwe","zxc","abc","xyz"]  

// function esElementoBuscado(element){
//     return element === "zxc"

// }


// const elementoBuscado = arr1.find(esElementoBuscado)

// console.log(elementoBuscado)

//------------------------------------------------------------------
// .includes (determina si un array contiene un elemento dado o no.)

// const arr1 = ["qwe","zxc","abc","xyz"]  

// const contieneABC = arr1.includes("abc") // true
// const contieneASD = arr1.includes("asd") // faciles

// console.log(contieneABC)

//------------------------------------------------------------------
// .some (determina si ALGUN ELEMENTo cumple una condición)

// const arr1 = [11, 2, 4]

// function elementoMayorADiez(element){
//     return element > 10

// }

// const algunoEsMayorADiez = arr1.some(elementoMayorADiez)

// console.log(algunoEsMayorADiez) // true (por el 11)

//-----------------------------------------------------------------
// .every (TODOS LOS ELEMENTOS deben cumplir la condición)

// const arr1 = [11, 2, 4]

// function elementoMayorADiez(element){
//     return element > 10
// }

// const sonTodosMayorADiez = arr1.every(elementoMayorADiez)
// console.log(sonTodosMayorADiez) // solamente el 11 > 10 - retorna False

//----------------------------------------------------------------
// .slice (cortar parte de un array y tenerlo en otro array)

// const arr1 = ["a", "b", "c" , "d", "e", "f"]

// const arr2 = arr1.slice(1,4) // el ultimo numero NO INCLUYE EL INDICE

// console.log(arr2)

//----------------------------------------------------------------
// .reduce (un unico resultado para procesar todos los elementos)

const arr1 = [10, 2, 6, 8, 3]

function sumarElementos(sumaAcumulada, elemento) {
    return sumaAcumulada + elemento
}

const suma = arr1.reduce(sumarElementos, 0)

console.log(suma)

//----------------------------------------------------
// Encadenar métodos
// dado un array de númros, obtener un nuevo array con todos los numeros mayores a 10

// const arr1 = [12, 2, 6, 83, 3, 23, 4, 52]

//     function mayoresADiez (element) {
//         return element > 10
//     }

//     function pasarString (element) {
//         return element.toString()
//     }

//     const arr2 = arr1.filter(mayoresADiez).map(pasarString)

//     console.log(arr2)

//----------------------------------------------------
// Objects

// const obj1 = {} // comienza objeto vacio

// const obj2 = {
//     nombre: "Pepe",
//     edad: 99
// } // inicia con objetos

// obj2.equipo = "Boca"

// console.log(obj2)

//----------------------------------------------------
// Object.keys (nos devuelve las keys)

// const obj = {
//     nombre: "Pepe",
//     edad: 99,
//     otrakey: "valor"
// }

// const keys = Object.keys(obj)

// console.log(keys)

//----------------------------------------------------
// Object.values (nos devuelve los valores)
// const obj = {
//     nombre: "Pepe",
//     edad: 99,
//     otrakey: "Value"
// }

// const values = Object.values(obj)

// console.log(values)

//----------------------------------------------------
// Object.hasOwnProperty

// const obj = {
//     nombre: "Pepe",
//     edad: 99,
//     otrakey: "Value"
// }

// const tieneNombre = obj.hasOwnProperty("nombre")
// const tieneApellido = obj.hasOwnProperty("apellido")

// console.log(tieneNombre) // true
// console.log(tieneApellido) // false

//----------------------------------------------------------------
// Spread operator(...) (separa los elementos de un array, o atributos de un objeto)

// Agregar un elemnto a un array
// let arr = [5, 8, 3]

// arr = [...arr, 4]

// console.log(arr)

// let arr2 = [...arr, 2,25]

// console.log(arr2)

// // Agregar atributo a un objeto

// let obj = {nombre: "Pepe", edad: 95}

// obj = {...obj, otrakey: "value"}

// console.log(obj)

//-----------------------------------------------------------------
// Math.max

const numeros = [5, 3, 7, 4, 8, 1]


console.log(Math.max(...numeros))

// Arrow Function

// let saludar = (nombre) => {
//     console.log ("Hola " + nombre + "!")
// }
// saludar("Jose")
// saludar("Pepe")
// saludar("Pipo")