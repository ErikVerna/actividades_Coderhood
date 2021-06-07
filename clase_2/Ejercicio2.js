/* Galletitas de Ema */

// Receta para galletitas:
// 3 huevos
// 1 barra de chocolate
// 0.5 kilos de harina
// 5 cucharadas de azucar

//Debe tener variables al inicio faciles de editar

// ---- Lo que necesito ----
let huevosReceta = 3;
let barradeChocolateReceta = 1;
let harinaReceta = 0.5;
let cucharadasDeAzucarReceta = 5;

// ----- Lo que tengo -------
let huevosTengo = 3
let barradeChocolateTengo = 3
let harinaTengo = 0
let cucharadasdeAzucarTengo = 5

let galletitas = true //si tengo los elementos, puedo cocinar

if (huevosReceta > huevosTengo) {
  console.log("Faltan", (huevosReceta - huevosTengo), "huevo(s)");
  galletitas = false; // si esta condición no se cumple, no hay galletitas
}
if (barradeChocolateReceta > barradeChocolateTengo) {
  console.log("Falta",barradeChocolateReceta - barradeChocolateTengo, "barra de chocolate");
  galletitas = false;
}

if (harinaReceta > harinaTengo) {
  console.log("Falta",(harinaReceta - harinaTengo),"de Harina");
  galletitas = false;
}
if (cucharadasDeAzucarReceta > cucharadasdeAzucarTengo) {
  console.log("Falta",(cucharadasDeAzucarReceta - cucharadasdeAzucarTengo), "cucharada(s) de azucar");
  galletitas = false;
}

if (galletitas) {
  console.log("Podes hacer Galletitas!"); // si la condicion es VERDADERA, hay galletitas
}

