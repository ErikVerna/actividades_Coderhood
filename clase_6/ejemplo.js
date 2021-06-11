// Dada un un array de compras, obtener todas las compras realizadas por "pepe" y devolver un arreglo con los nombres de los
// productos que compró

const compras = [
{ usuario: "pepe", producto: "mochila", costo: 1800 },
{ usuario: "maria", producto: "lapicera", costo: 50 },
{ usuario: "juan", producto: "cuaderno", costo: 200 },
{ usuario: "pepe", producto: "carpeta", costo: 300 },
{ usuario: "laura", producto: "escuadra", costo: 150 },
]

function comprasDePepe(compras) {
    return compras.usuario === "pepe"

}

function productoDeCompra(compras) {
    return compras.producto
}

const resultado = compras.filter(comprasDePepe).map(productoDeCompra)

console.log(resultado)
 