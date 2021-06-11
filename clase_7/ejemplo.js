try {
    // ambiente seguro donde podemos disparar errores
    throw new Error ("Error personalizado")
} catch (error) {
    // ambiente que se ejecuta si se atrapa un error
    // en el ambiente de try
    console.log(error)
} finally {
    // se ejecuta siempre, aunque haya un error
    console.log("Esto se va a imprimir siempre, no importa si hubo error o no")
}

