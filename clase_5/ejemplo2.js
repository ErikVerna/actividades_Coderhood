/* Recopilación de datos personales */

//Esta función obtiene los datos de una persona y los devuelve (se podria usar window.prompt para obtenerlos)

function obtenerDatosPersonales(){
    //se obtienen los datos de algunas formados
   //CREAR ESTRUCTURA DE DATOS Personales
  //COMO ESTABA ANTERIORMENTE
  let nombre = 'Pepe'
  let apellido = 'Pipo'
  let edad = 99
  let profesion = 'Programador'
  let animeFavorito = 'Evangelion'
   //COMO ESTA AHORA - Cambiar los "=" por ---> ":"
    let datos = {
     nombre: 'Pepe',
     apellido: 'Pipo',
     edad: 99,
     profesion: 'Programador',
     animeFavorito: 'Evangelion'
    }
    // TO_DO: devolver esta infomracion en una estructura de datos.
    
    //FALTA RETURN:
    return datos

}
let datosPersonales = obtenerDatosPersonales()

//imprimir los datos obtenidos

<<<<<<< HEAD
console.log(datosPersonales + "\n");

//TO_DO: Imprimir la profesion de la persona y
console.log("La profesion de la persona es: " + datosPersonales.profesion + "\n");
=======
console.log(datosPersonales);

//TO_DO: Imprimir la profesion de la persona y
console.log(datosPersonales.profesion)
>>>>>>> 84732caabbd88af8af6eafc0148a211546929d97
// ------------------------------------------------------
datosPersonales.procesado = true

//TO_DO: Agregar el campo 'procesado' y asingarle el valor 'TRUE' e imprimir los datos nuevamente
console.log(datosPersonales)