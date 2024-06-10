//Ejercicio 1
function Calcular() {

  const num1: number = parseFloat((document.getElementById('num1') as HTMLInputElement).value);
  const num2: number = parseFloat((document.getElementById('num2') as HTMLInputElement).value);
  const num3: number = parseFloat((document.getElementById('num3') as HTMLInputElement).value);


  const suma = (num1 + num2 + num3) / 3;
  document.getElementById('Promedio').innerHTML = `Tu Promedio es de: ${suma}`;
}

//Ejercicio 2

function CalcularArea() {
  const altura: number = parseFloat((document.getElementById('altura') as HTMLInputElement).value);
  const base: number = parseFloat((document.getElementById('base') as HTMLInputElement).value);

  const area: number = (altura * base) / 2;
  document.getElementById('Area').innerHTML = `El área del tirangulo es de: ${area} cm^2`;
}

//Ejercicio 3

function CalcularPar() {
  const num1: number = parseFloat((document.getElementById('num') as HTMLInputElement).value);

  if (num1 % 2 === 0) {
    document.getElementById('par').innerHTML = "El número es Par";
  } else {
    document.getElementById('par').innerHTML = "El número es Impar";

  }

}

//Ejercicio 4

function CalcularMayor() {
  const num1: number = parseFloat((document.getElementById('num1') as HTMLInputElement).value);
  const num2: number = parseFloat((document.getElementById('num2') as HTMLInputElement).value);
  const num3: number = parseFloat((document.getElementById('num3') as HTMLInputElement).value);

  const mayor: number[] = [num1, num2, num3];
  mayor.sort((a, b) => a - b);

  document.getElementById('mayor').innerHTML = `Los numeros quedarian ordenados del menor al mayor, asi: ${mayor}`;

}

//Ejercicio 5

function CalcularPotencia() {
  const num1: number = parseFloat((document.getElementById('num1') as HTMLInputElement).value);
  const num2: number = parseFloat((document.getElementById('num2') as HTMLInputElement).value);

  const potencia: number = Math.pow(num1, num2);

  document.getElementById('potencia').innerHTML = `El resultado de la potencia sería: ${potencia}`;
}

//Ejercicio 6

function CalcularTxtInverso() {
  const txt: String = (document.getElementById("text") as HTMLInputElement).value;
  const texto: string[] = txt.split("").reverse();
  const textoInvertido: string = texto.join('');

  document.getElementById('inverso').innerHTML = `Tú texto quedaria asi: ${textoInvertido}`;

  console.log("el array quedo asi: ", textoInvertido);

}

//Ejercicio 7

function CalcularFactorial() {
  const num1: number = parseFloat((document.getElementById('num') as HTMLInputElement).value);

  let factorial = 1;
  for (let i = 2; i <= num1; i++) {
    factorial *= i;
  }

  document.getElementById('factorial').innerHTML = `Este seria su factorización: ${factorial}`;

}

//Ejercicio8

function CalcularPerfecto() {
  let x: number = parseInt((document.getElementById('num') as HTMLInputElement).value);
  let ac = 0, i = x - 1;
  while (i > 0) {
    let r = x % i;
    if (r == 0) {
      ac = ac + i;
    }
    i = i - 1;
  }
  if (x == ac) {
    document.getElementById('perfecto').innerHTML = `Tú numero es perfecto`;

  }
  else {
    document.getElementById('perfecto').innerHTML = `Tú numero No es perfecto`;

  }
}

// Ejercicio 9

function CalcularPrimo() {
  let num: number = parseInt((document.getElementById('num') as HTMLInputElement).value);
  let i = 1;
  let a = 0;
  while (i <= num) {
    if (num % i === 0 ) {
      a++;  
    } 
    i++;
  }
  a === 2 ? document.getElementById('primo').innerHTML = (`Tú numero es Primo`) : (document.getElementById('primo').innerHTML = `Tú numero NO es Primo`);

}

//Ejercicio 10


function CalcularVocal():void{
  const txt: String = (document.getElementById("text") as HTMLInputElement).value;
  const min: string = txt.toLowerCase();

  let contador: number = 0;

  for(let i = 0; i < min.length; i++){
    if (min[i] === 'a' || min[i] === 'e' || min[i] === 'i' || min[i] === 'o' || min[i] === 'u') {
      contador++;

    }
  }
  document.getElementById('texto').innerHTML = `Tú texto continene: ${contador} vocales`;


}