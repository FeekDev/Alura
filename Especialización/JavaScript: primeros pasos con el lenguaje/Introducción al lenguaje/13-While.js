/* Creación de listas */
let paisesDestino = ['Colombia', 'Brazil', 'Perú', 'Venezuela'];
let preciosPaises = [430, 420, 410, 400];
let presupuesto = 420;
let i = 0

while (preciosPaises[i] > presupuesto) {
    i += 1;
}

if (i >= paisesDestino.length) {
    console.log(`No se encentra un destino con el presupuesto indicado`)
} else {
    console.log(`De acuerdo al presupuesto que tienes puedes viajar a ${paisesDestino[i]}`)   
}