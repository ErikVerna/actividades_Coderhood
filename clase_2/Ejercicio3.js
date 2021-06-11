/* La tienda de ropa */
// Una tienda de ropa desea tener un programa que le permita calcular los aumentos a sus
// prendas, para eso se tienen los datos
// precioDePrenda (que ronda entre los 1500 y 3000 pesos)
// porcentajeDeAumento (que ronda entre el 25-100% )
// precioFinal (precioDePrenda con el aumento agregado)

//Programa debe informar precio final
//Programa debe informar "Precio excedido" cuando > 4000

<<<<<<< HEAD
let precioDePrenda = 1650; // Indico valor de prenda
let porcentajeDeAumento = precioDePrenda * 0.8; //Indico el porcentaje
let precioFinal = precioDePrenda + porcentajeDeAumento; //Declaramos el valor final sumando el precio y el aumento
=======
var precioDePrenda = 1650; // Indico valor de prenda
var porcentajeDeAumento = precioDePrenda * 0.8; //Indico el porcentaje
var precioFinal = precioDePrenda + porcentajeDeAumento; //Declaramos el valor final sumando el precio y el aumento
>>>>>>> 84732caabbd88af8af6eafc0148a211546929d97

if (precioFinal > 4000) {
  //Si el precio final supera 4000, esta excedido
  console.log("Precio excedido");
} else {
  //Sino, indicar el precio final en consola
  console.log("Precio final $", precioFinal);
} 