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



let presupuesto = 320;
let ciudadElegida = ' ';
let i = 0;


/* While statment

while (i < ciudadesDestino.length && ciudadElegida) {
    if (ciudadesDestino[i].pasaje == presupuesto) {
        ciudadElegida = ciudadesDestino[i].ciudad;
    }
    i += 1;
}


if (ciudadElegida == ' ') {
    console.log(`No se encentra un destino con el presupuesto indicado`)
} else {
    console.log(`De acuerdo al presupuesto que tienes puedes viajar a ${ciudadElegida}`)
}
*/


/*Do statment */


do {
    if (ciudadesDestino[i].pasaje < presupuesto) {
        ciudadElegida = ciudadesDestino[i].ciudad;
        break
    }
    i += 1;
} while (i < ciudadesDestino.length && ciudadElegida);

if (ciudadElegida == ' ') {
    console.log(`No se encentra un destino con el presupuesto indicado`)
} else {
    console.log(`De acuerdo al presupuesto que tienes puedes viajar a ${ciudadElegida}`)
}
