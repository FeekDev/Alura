/* Listas con el metodo */

let paisesDisponibles = new Array('Colombia', 'Brazil', 'Perú');

/* Lista creada desde cero */

let paisesDestino = ['Colombia', 'Brazil', 'Perú'];
let ciudadesDestino = ['Bogota', 'Brazilia', 'Lima'];


/* Metodo push */
paisesDestino.push('Uruguay');
ciudadesDestino.push('Montevideo');


/* Metodo unshift */

paisesDestino.unshift('Venezuela');
ciudadesDestino.unshift('Caracas');

/* Metodo splice */

paisesDestino.splice(0,2,'Cuba', 'Argentina');
console.log(paisesDestino);
console.log(ciudadesDestino);
