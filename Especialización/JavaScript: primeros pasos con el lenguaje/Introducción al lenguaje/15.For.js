/* Creación diccionario */

let ciudadesDestino = [
    {
        'ciudad': 'Bogota',
        'pasaje': 454
    },
    {
        'ciudad': 'Brazilia',
        'pasaje': 444
    },
    {
        'ciudad': 'Lima',
        'pasaje': 434
    },
    {
        'ciudad': 'Caracas',
        'pasaje': 424
    }
]



let presupuesto = 400;
let ciudadElegida = ' ';

/*For statment */

for (let index = 0; index < ciudadesDestino.length ; index++) {
    if (ciudadesDestino[index].pasaje < presupuesto) {
        ciudadElegida = ciudadesDestino[index].ciudad;
        break;
    }
}

if (ciudadElegida == ' ') {
    console.log(`No se encentra un destino con el presupuesto indicado`)
} else {
    console.log(`De acuerdo al presupuesto que tienes puedes viajar a ${ciudadElegida}`)
}
