function randomError() {
    if(Math.random() < 0.5) {
        // Esto se ejecuta el 50% de las veces    
        throw new Error("Error catastrofico");
    }
    return "Todo ok"
}

try {
    let resultado = randomError();
    console.log(resultado);
} catch (error) {
    console.log(error.message);
}

