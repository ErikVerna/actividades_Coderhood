// 3) Descarga de informacion prohibida

// Crear una funcion llamada pedirUsuario que retorna un usuario al azar de la siguiente lista:

let lista = [{
    id: 19310,
    nombre: "Bautista",
},{
    id: 90010,
    nombre: "Ema",
},{
    id: 51900,
    nombre: "Lucas",
},{
    id: 00000,
    nombre: "Meison",
}
]

// La funcion pedirUsuario disparar un error llamado 'ForbiddenInformation' si el usuario elegido es el del id = 00000

// Llamar a la funcion pedirUsuario dentro de la funcion pedirInformacion para cambiar el retorno de la funcion pedirInformacion.

// Considerar que la funcion pedirInformacion ahora tiene que capturar un error, cuando la capture debe disparar un error 'NetworkError'.

// Ejemplo:



function pedirUsuario(){
    // puede disparar un error, devuelve un usuario

    const usuarios = Math.floor(Math.random() * lista.length)
    const ForbiddenInformation = 'ForbiddenInformation: No se puede acceder a esta informacion'
    if (lista[usuarios].id === 00000){
        throw new Error(ForbiddenInformation)
    }
    return lista[usuarios]
}

function pedirInformacion(){
    let usuario;
    const probabilidad = Math.random() * 100
    // el resto de la funcion
    const NetworkError = 'NetworkError: Sin conexion a internet'
    
    try {
        usuario = pedirUsuario(); // considerar 'pedirUsuario' puede disparar un error
    } catch (error) {
        throw new Error(error.message)
    }
    
    
    if(probabilidad <= 20){
        throw new Error(NetworkError)
    }
    
    if(usuario){

        return console.log(usuario);
    }
}

try {
    pedirInformacion()
} catch (error) {
    console.log(error.message);
}