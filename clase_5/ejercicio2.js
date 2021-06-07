// //Dado un array de alumnos de Coderhood Academy,
//indicar quien es el que lidera el ranking de paricipacion en Discord

let alumnos = [
    { user: "miafate", ranking: 4 },
    { user: "argentum", ranking: 2 },
    { user: "lucas", ranking: 6 },
    { user: "ema", ranking: 3 },
  ];

let rankingLider = alumnos[0]

for (let i = 0; i < alumnos.length; i++){
    const rankings = alumnos[i]

    if (alumnos[i].ranking < rankingLider.ranking){
      rankingLider = rankings
    }
}

const solucion = "El usuario " + rankingLider.user + " lidera el ranking de participación en el puesto: " + rankingLider.ranking

console.log(solucion)

