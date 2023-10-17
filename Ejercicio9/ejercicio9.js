function calcularDoble() {

    var numero = prompt("Por favor, introduce un número:");


    numero = parseFloat(numero);

        if (!isNaN(numero)) {
        
        var doble = numero * 2;

                alert("El doble de " + numero + " es " + doble);
    } else {

        alert("Por favor, introduce un número válido.");
    }
}
