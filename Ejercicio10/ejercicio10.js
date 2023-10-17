// a) Programa para obtener el número de días en un mes:
let mes = parseInt(prompt("Introduce un número del 1 al 12 para representar un mes:"));
let diasEnMes;

switch (mes) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        diasEnMes = 31;
        break;
    case 4: case 6: case 9: case 11:
        diasEnMes = 30;
        break;
    case 2:
        diasEnMes = 28;
        break;
    default:
        diasEnMes = "Número de mes inválido";
}

document.write("El mes seleccionado tiene " + diasEnMes + " días.");
