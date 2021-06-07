// 4) La secuencia de Fibonacci
// En matemáticas, la sucesión o serie de Fibonacci es la
// siguiente sucesión infinita de números naturales:
// 0 , 1 , 1 , 2 , 3 , 5 , 8 , 13 , 21
// La sucesión comienza con los números 0 y 1, a partir de estos
// cada término es la suma de sus dos anteriores
// Sea una variable numerica entera y positiva 'limite':
// Recorrer desde 0 hasta limite
// Imprimir tantos terminos de la secuencia como repeticions de 0 hasta limite
// Ejemplo: si limite = 6, imprimir 0, 1, 1, 2, 3, 5
console.clear();
console.log("La secuencia de Fibonacci");

let limite = 6;
let fi1 = 0;
let fi2 = 1;
let fi3;

console.log(fi1);
console.log(fi2);

for (let i = 0; i < limite - 2; i++) {
  fi3 = fi1 + fi2;
  fi1 = fi2;
  fi2 = fi3;

  console.log(fi3);
}
