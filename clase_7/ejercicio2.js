// 2) Simulador de descarga de informacion
// Cuando queremos descargar informacion de internet, 
//varias cosas pueden ir mal: desconexion de internet, 
//corte de luz, perdida de informacion por culpa de seres desconocidos. 
//Crear una funcion llamada pedirInformacion que no recibe 
//parametros y que devuelve el siguiente objeto que corresponde 
//a los datos de un usuario: 
//let persona = { id: 19310, nombre: "Bautista", apellido: "Di Santo" }

// La funcion pedirInformacion tiene:

// 25% de posibilidades de disparar un error por desconexion de internet,
// el nombre del error es 'NetworkError'
// 18% de posibilidades de disparar un error por error del servidor
//, el nombre del error es 'InternalError'
// 10% de posibilidades de disparar un error por una anomalia
//, el nombre del error es 'AlienError'


function pedirInformacion (){
    const bug = Math.random() * 100
    const NetworkError = 'NetworkError: Sin conexión a internet'
    const InternalError = 'InternalError: Error al conectarse con los servidores'
    const AlienError = 'AlienError: Anomalia extraterrestre ocurrida'

    if (bug > 28 && bug <= 53){
        throw new Error(NetworkError)
    }

    if(bug > 10 && bug <= 28){
        throw new Error(InternalError)
    }

    if(bug <= 10){
        throw new Error(AlienError)
    }

    let persona = { id: 19310, nombre: "Bautista", apellido: "Di Santo" }
    return console.log(persona); 
}

try {
    pedirInformacion();
} catch (error) {
    console.log(error.message);
}