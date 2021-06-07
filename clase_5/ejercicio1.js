/* un taller mecanico tiene una lista de autos para arreglar en el dia, de cada auto sabemos:
* dueño del dueño
* valor del arreglo
* tiempo que tarda el arreglo (en horas)
* lista de repuestos necesarios


- el dueño del taller quiere saber:
1. cual es el arreglo mas caro y los repuestos que necesita
2. todos los arreglos para personas que se llamen "Juan"
3. el precio total de los arreglos */


let autos = [
    { dueño: "Pipo",
      costo: 50000, // en pesos argentinos
      tiempo: 120, // en Horas
      repuestos: ['paragolpe','puerta conductor','rueda conductor']
    },
    { dueño: "Tomy",
      costo: 5000,
      tiempo: 48,
      repuestos: ['paragolpe trasero']
    },
    { dueño: "Juan",
      costo: 45000,
      tiempo: 120,
      repuestos: ['rueda trasera']
    },
    { dueño: "Juan",
      costo: 25000,
      tiempo: 72,
      repuestos: ['vidrio','baul']
    },
    { dueño: "Juan",
    costo: 1000,
    tiempo: 24,
    repuestos: ['Cadena']
    }
]

let autoMasCaro = {
  costo: 0
}

let repuestosJuanes = []

let costoTotal = 0;



function sumaJuanes(repuestos, repuestosJuanes) {
  for (let i = 0; i < repuestos.length; i++) {
    let repuesto = repuestos[i]

    repuestosJuanes.push(repuesto)
  }

  return repuestosJuanes
}

for (let i = 0; i < autos.length; i++){
  const auto = autos[i];
  
  if (auto.costo > autoMasCaro.costo){
      autoMasCaro = auto
  }

  if (auto.dueño === "Juan"){
      repuestosJuanes = sumaJuanes(auto.repuestos, repuestosJuanes)

  }

  if (auto.costo > 0){
    costoTotal += auto.costo
  }
}


const solucion1 = "El arreglo mas caro es: " + autoMasCaro.costo + " y necesita los repuestos: " + autoMasCaro.repuestos
const solucion2 = "Los repuestos de los Juanes son: " + repuestosJuanes
const solucion3 = "La suma de todos los arreglos es: " + costoTotal

console.log(solucion1)
console.log(solucion2)
console.log(solucion3)