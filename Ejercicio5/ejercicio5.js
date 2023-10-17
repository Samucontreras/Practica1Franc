var numero = parseInt(prompt("Por favor, ingrese un número del 1 al 10:"));

if (numero >= 1 && numero <= 10) {
    document.write("<h2>Has elegido la tabla de multiplicar del " + numero + ":</h2>");
    for (var i = 1; i <= 10; i++) {
        document.write(numero + " x " + i + " = " + (numero * i) + "<br>");
    }
} else {
    
    document.write("<h2>¡Número inválido! Por favor, ingrese un número del 1 al 10.</h2>");
}
