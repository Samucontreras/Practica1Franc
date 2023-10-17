var numero1 = parseFloat(prompt("Por favor, ingrese el primer número:"));
var numero2 = parseFloat(prompt("Por favor, ingrese el segundo número:"));

var menorNumero;

if (numero1 < numero2) {
    menorNumero = numero1;
} else if (numero2 < numero1) {
    menorNumero = numero2;
} else {
    menorNumero = "Los números son iguales";
}

document.write("<h2>El menor número es: " + menorNumero + "</h2>");
