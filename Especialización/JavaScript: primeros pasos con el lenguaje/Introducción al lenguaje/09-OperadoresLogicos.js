/* Creación de listas */
let paisesDestino = ['Colombia', 'Brazil', 'Perú', 'Venezula'];
let ciudadesDestino = ['Bogota', 'Brazilia', 'Lima', 'Caracas'];

/* Condicionales y operadores lógicos, busqueda de pais y su ciudad 

console.log('Buscando disponibilidad de ' + paisesDestino[0]);

if (paisesDestino.indexOf('Perú') >= 0) {
    console.log(`La ciudad de ${paisesDestino[0]} se encuentra disponible`);
    let ciudadFiltrada = ciudadesDestino.filter(ciudad => ciudad.includes('ta'));
    console.log(`En la ciudad de ${paisesDestino[0]} puedes visitar a ${ciudadFiltrada}`);
} else {
    console.log('Ciudad no disponible');
}

const valorPasaje = 10;

if (valorPasaje == 10) {
    console.log(`El valor del pasaje es de ${valorPasaje}`);
}
*/

/* recursivo 
let edadPasajero = 17;
let vieneAcompañado = true;


if ((edadPasajero >= 18 || vieneAcompañado) && (paisesDestino.indexOf('Perú') >= 0)) {
    console.log(`La ciudad de ${paisesDestino[0]} se encuentra disponible`);
    let ciudadFiltrada = ciudadesDestino.filter(ciudad => ciudad.includes('ta'));
    console.log(`En la ciudad de ${paisesDestino[0]} puedes visitar a ${ciudadFiltrada}`);
} else {
    console.log('Ciudad no disponible');
}
*/

/* Negativo */

let edadPasajero = 17;
let vieneAcompañado = true;


if (!((edadPasajero >= 18 || vieneAcompañado) && (paisesDestino.indexOf('Cuba') >= 0))) {
    console.log(`La ciudad de ${paisesDestino[0]} se encuentra disponible`);
    let ciudadFiltrada = ciudadesDestino.filter(ciudad => ciudad.includes('ta'));
    console.log(`En la ciudad de ${paisesDestino[0]} puedes visitar a ${ciudadFiltrada}`);
} else {
    console.log('Ciudad no disponible');
}