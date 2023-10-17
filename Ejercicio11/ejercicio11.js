// calculadora.js
function sumar() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML = "Resultado: " + (num1 + num2);
}

function restar() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML = "Resultado: " + (num1 - num2);
}

function multiplicar() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML = "Resultado: " + (num1 * num2);
}

function potencia() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML = "Resultado: " + Math.pow(num1, num2);
}
