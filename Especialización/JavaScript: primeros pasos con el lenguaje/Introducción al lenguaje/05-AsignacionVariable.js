/*Const, la asignacion no cambia en el ciclo de vida del programa */
const nombrePersona = 'Yury';
const apellidoPersona = 'Martinez';

/* alcance de variables let y var, se pueden redeclarar en el ciclo de vida del programa */

let apellidoPiloto = 'Szchumaher';
var nombrePiloto = 'Michael';

{
    console.log('Variable con let: ' + apellidoPiloto);
    console.log('Variable con var: ' + nombrePiloto);
    /*hay alcance de let */

    let titulosAlcanzados = 2;
    var titulosObtenidos = 2;
}
/* no se alcanza la variable let */
console.log('Variable con let: ' + titulosAlcanzados);
console.log('Variable con let: ' + titulosObtenidos);
