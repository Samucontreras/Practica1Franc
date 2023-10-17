
var n1 = parseFloat(prompt("Por favor, ingrese la primera nota:"));
var n2 = parseFloat(prompt("Por favor, ingrese la segunda nota:"));
var n3 = parseFloat(prompt("Por favor, ingrese la tercera nota:"));
var n4 = parseFloat(prompt("Por favor, ingrese la cuarta nota:"));


var media = (n1 + n2 + n3 + n4) / 4;


var notaMayor = Math.max(n1, n2, n3, n4);


var notaMenor = Math.min(n1, n2, n3, n4);


var mensaje = "";
if (media >= 5) {
    mensaje = "¡Has aprobado.";
} else {
    mensaje = "has suspendido.";
}


document.write("<h2>Media: " + media.toFixed(2) + "</h2>");
document.write("<h2>Nota mayor: " + notaMayor + "</h2>");
document.write("<h2>Nota menor: " + notaMenor + "</h2>");
document.write("<h2>" + mensaje + "</h2>");
