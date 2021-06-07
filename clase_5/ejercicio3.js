// //Dado un array de estudiantes de una universidad,
//mostrar los nombres de los estudiantes de la carrera Ingenieria en computacion.

let alumnos = [
    { nombre: "Ema", carrera: "Ingenieria en computacion" },
    { nombre: "Luis", carrera: "Produccion audiovisual" },
    { nombre: "Pablo", carrera: "Licenciatura en sistemas" },
    { nombre: "Meison", carrera: "Ingenieria en computacion" },
  ];

let carreraIngenieria = ""


for (let i = 0; i < alumnos.length; i++){
    const alumno = alumnos[i];
  

    if (alumno.carrera === "Ingenieria en computacion")
    carreraIngenieria += ", " + alumno.nombre
}
carreraIngenieria += "."

const solucion = "Los alumnos que estudian la carrera de energia son:  " + carreraIngenieria
console.log(solucion)
