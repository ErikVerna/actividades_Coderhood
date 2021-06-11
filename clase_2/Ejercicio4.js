/* Dia de paga */

// En una pizzeria requieren un programa que calcule cuanto cobraran neto los repartidores al
// final del dia (Todos cobran igual)
// Se tienen los siguientes datos obligatorios
// repartidores: (Cantidad de repartidores, puede ser cualquier numero entero)
// esFeriado: (true si es Feriado, false si no)
// gananciaDelDia: (Cuanto recaudo la pizzeria para distribuir a los empleados)
// porcentajeParaSueldos: (Un porcentaje de gananciaDelDia)
// sueldoNetoDeRepartidor: (Cuanto gana en bolsillo el repartidor)
// gananciaDelComercioFinal: (Cuanto gana el comercio una vez pagados los sueldos y
// demas)
// Se sabe que:
// En feriados: porcentajeParaSueldos es del 80% de gananciaDelDia mientras que en
// dias normales, es del 65%

let repartidores = 6; // Cantidad de repartidores
let esFeriado = false; // si es feriado true, false si no es
let gananciaDelDia = 15000;
let porcentajeParasueldos;
let dia = "feriado"; // declaro let de string

if (esFeriado) {
  porcentajeParasueldos = gananciaDelDia * 0.8;
} else {
  porcentajeParasueldos = gananciaDelDia * 0.65;
  dia = "Normal";
}

let sueldoNetoDeRepartidor = porcentajeParasueldos / repartidores; // van despues del if-else porque porcentajeParasueldos NO ESTA DETERMINADA
let gananciaDelComercioFinal = gananciaDelDia - porcentajeParasueldos;

console.log("Sueldo de Repartidores en dia" + " " + dia + " es de: $" + sueldoNetoDeRepartidor);
console.log("La ganancia del local del dia es de: " + "$" + gananciaDelDia)