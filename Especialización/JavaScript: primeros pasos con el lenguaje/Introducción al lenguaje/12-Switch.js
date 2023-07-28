/* Creación de listas */
let paisesDestino = ['Colombia', 'Brazil', 'Perú', 'Venezuela'];


let paisElegido = 'Venezuela';
let pasaporte = true; 
let valorPasaje = 0;

if (paisesDestino.indexOf(paisElegido) >= 0 || pasaporte) {
    switch (paisElegido) {
        case 'Colombia':
            valorPasaje = 400;
            break;
        case 'Brazil':
            valorPasaje = 410;
            break;
        case 'Perú':
            valorPasaje = 420;
            break;
        case 'Venezuela':
            valorPasaje = 430;
            break;
        default:
            console.log(`No hay pasaje para la ciudad elegida`);
    }
}

if (valorPasaje > 0) {
    console.log(`Valor del pasaje es ${valorPasaje}`);
}