/* Creación de listas */
let paisesDestino = ['Colombia', 'Brazil', 'Perú', 'Venezuela'];
let ciudadesDestino = ['Bogota', 'Brazilia', 'Lima', 'Caracas'];

let edadPasajero = 15;
let vieneAcompañado = false;

/* If anidados */
if ((edadPasajero >= 18 || vieneAcompañado) && (paisesDestino.indexOf('Venezuela') >= 0)) {
    console.log(`La ciudad de ${paisesDestino[3]} se encuentra disponible`);
    let ciudadFiltrada = ciudadesDestino.filter(ciudad => ciudad.includes('as'));
    console.log(`En la ciudad de ${paisesDestino[3]} puedes visitar a ${ciudadFiltrada}`);
} else {
    if ((edadPasajero >= 16 ) && (paisesDestino.indexOf('Perú') >= 0)) {
        console.log(`Pasajero menor de edad puede viajar a ${paisesDestino[2]}`)
    } else {
        console.log('Pasajero no cumple requisitos');  
    }
}