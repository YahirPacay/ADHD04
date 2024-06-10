//Ejercicio 1
function Calcular() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var num3 = parseFloat(document.getElementById('num3').value);
    var suma = (num1 + num2 + num3) / 3;
    document.getElementById('Promedio').innerHTML = "Tu Promedio es de: ".concat(suma);
}
//Ejercicio 2
function CalcularArea() {
    var altura = parseFloat(document.getElementById('altura').value);
    var base = parseFloat(document.getElementById('base').value);
    var area = (altura * base) / 2;
    document.getElementById('Area').innerHTML = "El \u00E1rea del tirangulo es de: ".concat(area, " cm^2");
}
//Ejercicio 3
function CalcularPar() {
    var num1 = parseFloat(document.getElementById('num').value);
    if (num1 % 2 === 0) {
        document.getElementById('par').innerHTML = "El número es Par";
    }
    else {
        document.getElementById('par').innerHTML = "El número es Impar";
    }
}
//Ejercicio 4
function CalcularMayor() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var num3 = parseFloat(document.getElementById('num3').value);
    var mayor = [num1, num2, num3];
    mayor.sort(function (a, b) { return a - b; });
    document.getElementById('mayor').innerHTML = "Los numeros quedarian ordenados del menor al mayor, asi: ".concat(mayor);
}
//Ejercicio 5
function CalcularPotencia() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var potencia = Math.pow(num1, num2);
    document.getElementById('potencia').innerHTML = "El resultado de la potencia ser\u00EDa: ".concat(potencia);
}
//Ejercicio 6
function CalcularTxtInverso() {
    var txt = document.getElementById("text").value;
    var texto = txt.split("").reverse();
    var textoInvertido = texto.join('');
    document.getElementById('inverso').innerHTML = "T\u00FA texto quedaria asi: ".concat(textoInvertido);
    console.log("el array quedo asi: ", textoInvertido);
}
//Ejercicio 7
function CalcularFactorial() {
    var num1 = parseFloat(document.getElementById('num').value);
    var factorial = 1;
    for (var i = 2; i <= num1; i++) {
        factorial *= i;
    }
    document.getElementById('factorial').innerHTML = "Este seria su factorizaci\u00F3n: ".concat(factorial);
}
//Ejercicio8
function CalcularPerfecto() {
    var x = parseInt(document.getElementById('num').value);
    var ac = 0, i = x - 1;
    while (i > 0) {
        var r = x % i;
        if (r == 0) {
            ac = ac + i;
        }
        i = i - 1;
    }
    if (x == ac) {
        document.getElementById('perfecto').innerHTML = "T\u00FA numero es perfecto";
    }
    else {
        document.getElementById('perfecto').innerHTML = "T\u00FA numero No es perfecto";
    }
}
// Ejercicio 9
function CalcularPrimo() {
    var num = parseInt(document.getElementById('num').value);
    var i = 1;
    var a = 0;
    while (i <= num) {
        if (num % i === 0) {
            a++;
        }
        i++;
    }
    a === 2 ? document.getElementById('primo').innerHTML = ("T\u00FA numero es Primo") : (document.getElementById('primo').innerHTML = "T\u00FA numero NO es Primo");
}
//Ejercicio 10
function CalcularVocal() {
    var txt = document.getElementById("text").value;
    var min = txt.toLowerCase();
    var contador = 0;
    for (var i = 0; i < min.length; i++) {
        if (min[i] === 'a' || min[i] === 'e' || min[i] === 'i' || min[i] === 'o' || min[i] === 'u') {
            contador++;
        }
    }
    document.getElementById('texto').innerHTML = "T\u00FA texto continene: ".concat(contador, " vocales");
}
