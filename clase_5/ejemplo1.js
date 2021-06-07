let usuarios = [
    { nombre: 'Ema',
      edad: 30,
      habilidades: ["Html", "Javascript", "React"]
    },
    { nombre: "Meison",
      edad: 29,
      habilidades: ["Node", "Json", "Ruby"]
    }

];

console.log(usuarios.length);
//              i < 2 (usuarios.length cuenta la cantidad de objetos que hay en el array)
for (let i = 0; i < usuarios.length; i++) {
      console.log(usuarios[i])

}
