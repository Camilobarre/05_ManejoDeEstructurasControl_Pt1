console.groupCollapsed("Ejercicio 1");
// Ejercicio 1
let numeroEjercicio1 = prompt("Ingresa un número para verificar si es positivo:")
if (numeroEjercicio1 > 0) {
    console.info("El número que ingresaste es positivo")
} else {
    console.info("El número que ingresaste es negativo")
}
console.groupEnd();

console.groupCollapsed("Ejercicio 2");
// Ejercicio 2
let numeroEjercicio2 = prompt("Ingresa un número para verificar si es negativo:")
if (numeroEjercicio2 > 0) {
    console.info("El número que ingresaste es positivo")
} else {
    console.info("El número que ingresaste es negativo")
}
console.groupEnd();

console.groupCollapsed("Ejercicio 3");
// Ejercicio 3
let numeroEjercicio3 = prompt("Ingresa número para verificar si es par:")
if (numeroEjercicio3 % 2 === 0) {
    console.info(numeroEjercicio3 + " es un número par")
} else {
    console.info(numeroEjercicio3 + " es un número impar")
}
console.groupEnd();

console.groupCollapsed("Ejercicio 4");
// Ejercicio 4
let numeroEjercicio4 = prompt("Ingresa número para verificar si es impar:")
if (numeroEjercicio4 % 2 !== 0) {
    console.info(numeroEjercicio4 + " es un número impar")
} else {
    console.info(numeroEjercicio4 + " es un número par")
}
console.groupEnd();

console.groupCollapsed("Ejercicio 5");
// Ejercicio 5
let numeroEjercicio5 = prompt("Ingresa número para verificar si es múltiplo de 5:")
if (numeroEjercicio5 % 5 === 0) {
    console.info(numeroEjercicio5 + " es un múltiplo de 5")
} else {
    console.info(numeroEjercicio5 + " no es un múltiplo de 5")
}
console.groupEnd();

console.groupCollapsed("Ejercicio 6");
// Ejercicio 6
let numeroEjercicio6 = prompt("Ingresa número para verificar si es divisible por 3:")
if (numeroEjercicio6 % 3 === 0) {
    console.info(numeroEjercicio6 + " es divisible por 3")
} else {
    console.info(numeroEjercicio6 + " no es divisible por 3")
}
console.groupEnd();

console.groupCollapsed("Ejercicio 7");
// Ejercicio 7
let numeroEjercicio7 = prompt("Ingresa un número para verificar si es mayor que 100:")
if (numeroEjercicio7 > 100) {
    console.info("El número es mayor que 100")
} else {
    console.info("El número no es mayor que 100")
}
console.groupEnd();

console.groupCollapsed("Ejercicio 8");
// Ejercicio 8
let numeroEjercicio8 = prompt("Ingresa un número para verificar si es menor que -50:")
if (numeroEjercicio8 < -50) {
    console.info("El número es menor que -50")
} else {
    console.info("El número no menor que -50")
}
console.groupEnd();

console.groupCollapsed("Ejercicio 9");
// Ejercicio 9
let numeroEjercicio9 = prompt("Ingresa número para verificar si están en el rango de 20 a 50:")
if (numeroEjercicio9 >= 20 && numeroEjercicio9 <= 50) {
    console.info("El número se encuentra en el rango");
} else {
    console.info("El número no se encuentra en el rango");
}
console.groupEnd();

console.groupCollapsed("Ejercicio 10");
// Ejercicio 10
let numeroEjercicio10 = prompt("Ingresa número para determinar si es igual a 0:")
if (numeroEjercicio10 === 0) {
    console.info("El número es igual a 0");
} else {
    console.info("El número no es igual a 0");
}
console.groupEnd();

console.groupCollapsed("Ejercicio 11");
// Ejercicio 11
let numeroEjercicio11 = prompt("Ingresa número para verificar si están en el rango de -10 a 10:")
if (numeroEjercicio11 >= -10 && numeroEjercicio11 <= 10) {
    console.info("El número se encuentra en el rango");
} else {
    console.info("El número no se encuentra en el rango");
}
console.groupEnd();

console.groupCollapsed("Ejercicio 12");
// Ejercicio 12
let numeroEjercicio12 = prompt("Ingresa un año para verificar si es bisiesto:")
if (((numeroEjercicio12 % 4 === 0 && numeroEjercicio12 % 100 !== 0) || numeroEjercicio12 % 400 === 0)) {
    console.info("El año es bisiesto")
} else {
    console.info("El año no es bisiesto")
}
console.groupEnd();

console.groupCollapsed("Ejercicio 13");
// Ejercicio 13
let numeroEjercicio13 = prompt("Ingresa tu edad para verificar si eres mayor:")
if (numeroEjercicio13 >= 18) {
    console.info("Eres mayor de edad")
} else {
    console.info("No eres mayor de edad")
}
console.groupEnd();

console.groupCollapsed("Ejercicio 14");
// Ejercicio 14
console.info("No se encuentra Ejercicio 14")
console.groupEnd();

console.groupCollapsed("Ejercicio 15");
// Ejercicio 15
let numeroEjercicio15 = prompt("Ingresa un número para verificar si es cuadrado perfecto:")
if (numeroEjercicio15 === 0) {
    console.info("Caso especial donde 0 es cuadrado perfecto")
}
for (let i = 1; i <= numeroEjercicio15; i++) {
    if (i * i === numeroEjercicio15) {
        console.info("El número es un cuadrado perfecto")
    } else if (i * i > numeroEjercicio15) {
        console.info("El número no es un cuadrado perfecto")
    }
}
console.groupEnd();

console.groupCollapsed("Ejercicio 16");
// Ejercicio 16
let numeroEjercicio16 = prompt("Ingresa un número para verificar si un número de Fibonacci:")
if (numeroEjercicio16 === 0 || numeroEjercicio16 === 1) {
    console.info("Caso especial donde 0 y 1 son número de Fibonacci")
}
let fibonacci1 = 0;
let fibonacci2 = 1;
while (fibonacci1 + fibonacci2 <= numeroEjercicio16) {
    let fibonacciActual = fibonacci1 + fibonacci2;
    if (fibActual === numero) {
        console.info("Es un número de Fibonacci")
    }
    fibonacci1 = fibonacci2;
    fibonacci2 = fibonacciActual;
}
console.info("No es un número de Fibonacci")
console.groupEnd();

console.groupCollapsed("Ejercicio 17");
// Ejercicio 17
let numeroEjercicio17 = prompt("Ingresa número para verificar si es potencia de 2:")
if ((Math.log2(numeroEjercicio17)).isInteger) {
    console.info("El número es potencia de 2")
} else {
    console.info("El número no es potencia de 2")
}
console.groupEnd();

console.groupCollapsed("Ejercicio 18");
// Ejercicio 18
let numeroEjercicio18 = prompt("Ingresa un número para verificar si es palíndromo:")
let numeroString = numeroEjercicio18.toString();
let i = 0;
let j = numeroString.length - 1;
while (i < j) {
    if (numeroString[i] !== numeroString[j]) {
        return console.info("El número no es un palíndromo");
    }
    i++;
    j--;
}
return console.info("El número es un palíndromo");
console.groupEnd();

console.groupCollapsed("Ejercicio 19");
// Ejercicio 19
let textoEjercicio19 = prompt("Ingresa una cadena para verificar si se incluye la palabra JavaScript:")
if (textoEjercicio19.includes("JavaScript")) {
    console.log("La cadena contiene'JavaScript'.");
} else {
    console.log("La cadena no contiene 'JavaScript'.");
}
console.groupEnd();

console.groupCollapsed("Ejercicio 20");
// Ejercicio 20
let textoEjercicio20 = prompt("Ingresa una cadena para verificar si tiene más de 10 caracteres:")
if (textoEjercicio20.length > 10) {
    console.log("La cadena tiene más de 10 caracteres.");
} else {
    console.log("La cadena no tiene más de 10 caracteres.");
}
console.groupEnd();

console.groupCollapsed("Ejercicio 21");
// Ejercicio 21
let textoEjercicio21 = prompt("Ingresa una cadena para verificar si se encuentra en minúsculas:")
for (let i = 0; i < textoEjercicio21.length; i++) {
    // Comprobar si el carácter actual no es una letra minúscula
    if (textoEjercicio21[i] < 'a' || textoEjercicio21[i] > 'z') {
        console.info("No se encuentra en minúsculas")
    }
}
console.info("Se encuentra en minúsculas")
console.groupEnd();

console.groupCollapsed("Ejercicio 22");
// Ejercicio 22
let textoEjercicio22 = prompt("Ingresa una cadena para verificar si hay algún número")
for (let i = 0; i < textoEjercicio22.length; i++) {
    if (!isNaN(textoEjercicio22[i])) {
        console.info("Hay algún número en la cadena")
    }
}
console.info("No hay algún número en la cadena")
console.groupEnd();

console.groupCollapsed("Ejercicio 23");
// Ejercicio 23
let textoEjercicio23 = prompt("Ingresa una cadena para verificar si termina en punto (.):")
if (texto.endsWith(".")) {
    console.info("La cadena termina con un punto.");
} else {
    console.info("La cadena no termina con un punto.");
}
console.groupEnd();

console.groupCollapsed("Ejercicio 24");
// Ejercicio 24
let textoEjercicio24 = prompt("Ingresa una cadena para verificar si es pangrama:")
textoEjercicio24 = textoEjercicio24.toLowerCase()
let alfabeto = "abcdefghijklmnopqrstuvwxyz";
for (let letra of alfabeto) {
    if (textoEjercicio24.indexOf(letra) === -1) {
        console.info("La cadena no es un panagrama")
    }
}
console.info("La cadena es un panagrama")
console.groupEnd();

console.groupCollapsed("Ejercicio 25");
// Ejercicio 25
let textoEjercicio25 = prompt("Ingresa un día de la semana:")
textoEjercicio25 = textoEjercicio25.toLowerCase()
if (textoEjercicio25 === "lunes" || textoEjercicio25 === "martes" || textoEjercicio25 === "miércoles" || textoEjercicio25 === "jueves" || textoEjercicio25 === "viernes" || textoEjercicio25 === "miercoles") {
    console.info("Es día laborable")
} else {
    console.info("No es día laborable")
}
console.groupEnd();

console.groupCollapsed("Ejercicio 26");
// Ejercicio 26
let textoEjercicio26 = prompt("Ingresa un día de la semana:")
textoEjercicio26 = textoEjercicio26.toLowerCase();
if (textoEjercicio26 === "sábado" || textoEjercicio26 === "domingo" || textoEjercicio26 === "sabado") {
    console.info("Es día de fin de semana")
} else {
    console.info("No es día de fin de semana")
}
console.groupEnd();

console.groupCollapsed("Ejercicio 27");
// Ejercicio 27
let numeroEjercicio27 = prompt("Ingresa un número para verificar si es un mes válido:")
if (numeroEjercicio27 >= 1 && numeroEjercicio27 <= 12) {
    console.info("El número representa un mes válido")
} else {
    console.info("El número no representa un mes válido")
}
console.groupEnd();

console.groupCollapsed("Ejercicio 28");
// Ejercicio 28
let numeroEjercicio28 = prompt("Ingresa una hora para verifiar si está en el rango de 9AM a 6PM:")
let partes = numeroEjercicio28.split(" ")
let horaNumerica = parseInt(partes[0])
let periodo = partes[1]
if ((horaNumerica >= 9 && periodo === "AM") || (horaNumerica <= 6 && periodo === "PM")) {
    console.info("La hora se encuentra en el rango específico")
} else {
    console.info("La hora no se encuentra en el rango específico")
}
console.groupEnd();

console.groupCollapsed("Ejercicio 29");
// Ejercicio 29
let numeroEjercicio29 = prompt("Ingresa una edad para verificar si una edad es menor a 18 años o mayor 65 años:")
if (numeroEjercicio29 >= 18 && numeroEjercicio29 <= 65) {
    console.info("La edad que ingresaste es mayor a 65 años o menor a 18 años")
} else {
    console.info("La edad que ingresaste no es mayor a 65 años o menor a 18 años")
}
console.groupEnd();

console.groupCollapsed("Ejercicio 30");
// Ejercicio 30
let numeroEjercicio30_1 = prompt("Ingresa un lado del triángulo:")
let numeroEjercicio30_2 = prompt("Ingresa un lado del triángulo:")
let numeroEjercicio30_3 = prompt("Ingresa un lado del triángulo:")
if (numeroEjercicio30_1 === numeroEjercicio30_2 && numeroEjercicio30_2 === numeroEjercicio30_3) {
    console.info("Es un triángulo equilátero")
} else {
    console.info("No es un triángulo equilátero")
}
console.groupEnd();

console.groupCollapsed("Ejercicio 31");
// Ejercicio 31
let numeroEjercicio31_1 = prompt("Ingresa un lado del triángulo:")
let numeroEjercicio31_2 = prompt("Ingresa un lado del triángulo:")
let numeroEjercicio31_3 = prompt("Ingresa un lado del triángulo:")
if (numeroEjercicio31_1 === numeroEjercicio31_2 || numeroEjercicio31_1 === numeroEjercicio31_3 || numeroEjercicio31_2 === numeroEjercicio31_3) {
    console.info("Es un triángulo isósceles")
} else {
    console.info("No es un triángulo isósceles")
}
console.groupEnd();

console.groupCollapsed("Ejercicio 32");
// Ejercicio 32
let numeroEjercicio32_1 = prompt("Ingresa un lado del triángulo:")
let numeroEjercicio32_2 = prompt("Ingresa un lado del triángulo:")
let numeroEjercicio32_3 = prompt("Ingresa un lado del triángulo:")
if (numeroEjercicio32_1 !== numeroEjercicio32_2 && numeroEjercicio32_1 !== numeroEjercicio32_3 && numeroEjercicio32_2 !== numeroEjercicio32_3) {
    console.info("Es un triángulo escaleno")
} else {
    console.info("No es un triángulo escaleno")
}
console.groupEnd();

console.groupCollapsed("Ejercicio 33");
// Ejercicio 33
let numeroEjercicio33_1 = prompt("Ingresa el primer número:")
let numeroEjercicio33_2 = prompt("Ingresa el segundo número:")
if (numeroEjercicio33_1 > 2 * numeroEjercicio33_2) {
    console.info("El primer número es mayor que el doble del segundo")
} else {
    console.info("El primer número no es mayor que el doble del segundo")
}
console.groupEnd();

console.groupCollapsed("Ejercicio 34");
// Ejercicio 34
let numeroEjercicio34_1 = prompt("Ingresa el primer número:")
let numeroEjercicio34_2 = prompt("Ingresa el primer número:")
let suma34 = numeroEjercicio34_1 + numeroEjercicio34_2;
if (suma34 > 100) {
    console.info("La suma de los dos números es mayor a 100")
} else {
    console.info("La suma de los dos números no es mayor a 100")
}
console.groupEnd();

console.groupCollapsed("Ejercicio 35");
// Ejercicio 35
let numeroEjercicio35_1 = prompt("Ingresa el primer número:")
let numeroEjercicio35_2 = prompt("Ingresa el primer número:")
let resta35 = numeroEjercicio35_1 - numeroEjercicio35_2;
if (resta35 < 50) {
    console.info("La resta de los dos números es menor a 50")
} else {
    console.info("La suma de los dos números no es menor a 50")
}
console.groupEnd();

console.groupCollapsed("Ejercicio 36");
// Ejercicio 36
let numeroEjercicio36_1 = prompt("Ingresa el primer número:")
let numeroEjercicio36_2 = prompt("Ingresa el segundo número:")
if (numeroEjercicio36_1 === 2 * numeroEjercicio36_2 || numeroEjercicio36_2 === 2 * numeroEjercicio36_1) {
    console.info("Uno de los número es el doble del otro")
} else {
    console.info("Uno de los número no es el doble del otro")
}
console.groupEnd();

console.groupCollapsed("Ejercicio 37");
// Ejercicio 37
let numeroEjercicio37_1 = prompt("Ingresa el primer número:")
let numeroEjercicio37_2 = prompt("Ingresa el segundo número:")
if (2 * numeroEjercicio37_1 === 3 * numeroEjercicio37_2 || 2 * numeroEjercicio37_2 === 3 * numeroEjercicio37_1) {
    console.info("El doble de un número es el triple del otro")
} else {
    console.info("El doble de un número no es el triple del otro")
}
console.groupEnd();

console.groupCollapsed("Ejercicio 38");
// Ejercicio 38
let numeroEjercicio38_1 = prompt("Ingresa el primer número:")
let numeroEjercicio38_2 = prompt("Ingresa el primer número:")
let suma38 = numeroEjercicio38_1 + numeroEjercicio38_2;
if (suma38 === 50) {
    console.info("La suma de los dos números es igual a 50")
} else {
    console.info("La suma de los dos números no es igual a 50")
}
console.groupEnd();

console.groupCollapsed("Ejercicio 39");
// Ejercicio 39
let numeroEjercicio39_1 = prompt("Ingresa el primer número:")
let numeroEjercicio39_2 = prompt("Ingresa el primer número:")
let producto39 = numeroEjercicio39_1 * numeroEjercicio39_2;
if (producto39 > 500) {
    console.info("El producto de los dos números es mayor que 500")
} else {
    console.info("El producto de los dos números no es mayor que 500")
}
console.groupEnd();

console.groupCollapsed("Ejercicio 40");
// Ejercicio 40
let numeroEjercicio40_1 = prompt("Ingresa el primer número:")
let numeroEjercicio40_2 = prompt("Ingresa el primer número:")
let division40 = numeroEjercicio40_1 / numeroEjercicio40_2;
if (division40 < 10) {
    console.info("La división de los dos números es menor que 10")
} else {
    console.info("La división de los dos números no es menor que 10")
}
console.groupEnd();