// Simulador de venta de productos con
// subtotal por categoría y total final.

// Jarhed Soto Lizama
// Comision 45280


// Inicialización contadores.
let contadorCatComestible = 0
let contadorCatBebestible = 0
let contadorCatOtros = 0
let contadorTotal = 0

// Registro de productos comprados.
let cantProductos = parseInt(prompt("Ingrese cantidad de productos comprados:"))
if (cantProductos > 0 && cantProductos != NaN) {

    for (let i = 0; i < cantProductos; i++) {

        // Valor producto + validación.
        let valProducto = parseInt(prompt("Ingrese el valor del producto #" + parseInt(i+1)))

        while (valProducto < 0 || valProducto == null || isNaN(valProducto) == true) {
            valProducto = prompt("Ingrese el valor del producto #" + parseInt(i+1) + "\n\nREINTENTE. Solo numeros mayor a 0.")
        }

        // Categoria producto + validación.
        let catProducto = prompt("Ingrese número de categoría del producto #" + parseInt(i+1) + "\n\n1 - Comestible // 2 - Bebestible // 3 - Otro")
        
        while (catProducto < 1 || catProducto > 3 || catProducto == null || isNaN(catProducto) == true) {
            catProducto = parseInt(prompt("Ingrese número de categoría del producto #" + parseInt(i+1) + "\n\n1 - Comestible // 2 - Bebestible // 3 - Otro" + "\n\nREINTENTE. Solo numeros del 1 al 3."))
        }
        
        // Actualización contadores categorías.
        switch (true) {

            case catProducto == 1:
                contadorCatComestible = contadorCatComestible + valProducto
                break;

            case catProducto == 2:
                contadorCatBebestible = contadorCatBebestible + valProducto
                break;

            case catProducto == 3:
                contadorCatOtros = contadorCatOtros + valProducto
                break;

        }

    }

    // Valor total.
    contadorTotal = contadorCatComestible + contadorCatBebestible + contadorCatOtros

    // Despliegue de datos.
    console.log("-- COMPRA REGISTRADA --")
    console.log("1. Categoría comestible: \t\t" + contadorCatComestible)
    console.log("2. Categoría bebestible: \t\t" + contadorCatBebestible)
    console.log("3. Categoría otros: \t\t\t" + contadorCatOtros)
    console.log("\nTOTAL COMPRA: \t\t\t\t" + contadorTotal)
    

// Validaciones datos inválidos.
} else {

    switch (true) {

        case cantProductos == 0:
            console.log("¡Ups! Debe ingresar por lo menos un producto para continuar el proceso de compra.")
            break;

        case isNaN(cantProductos):
            console.log("¡Ups! Debe ingresar una cantidad en números y no dejar este campo vacío.")
            break;

        default:
            console.log("¡Ha ocurrido un error inesperado! :(")
    }

}