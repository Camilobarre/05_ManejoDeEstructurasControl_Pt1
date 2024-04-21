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
console.groupEnd();

console.groupCollapsed("Ejercicio 22");
// Ejercicio 22
console.groupEnd();

console.groupCollapsed("Ejercicio 23");
// Ejercicio 23
console.groupEnd();

console.groupCollapsed("Ejercicio 24");
// Ejercicio 24
console.groupEnd();

console.groupCollapsed("Ejercicio 25");
// Ejercicio 25
console.groupEnd();

console.groupCollapsed("Ejercicio 26");
// Ejercicio 26
console.groupEnd();

console.groupCollapsed("Ejercicio 27");
// Ejercicio 27
console.groupEnd();

console.groupCollapsed("Ejercicio 28");
// Ejercicio 28
console.groupEnd();

console.groupCollapsed("Ejercicio 29");
// Ejercicio 29
console.groupEnd();

console.groupCollapsed("Ejercicio 30");
// Ejercicio 30
console.groupEnd();

console.groupCollapsed("Ejercicio 31");
// Ejercicio 31
console.groupEnd();

console.groupCollapsed("Ejercicio 32");
// Ejercicio 32
console.groupEnd();

console.groupCollapsed("Ejercicio 33");
// Ejercicio 33
console.groupEnd();

console.groupCollapsed("Ejercicio 34");
// Ejercicio 34
console.groupEnd();

console.groupCollapsed("Ejercicio 35");
// Ejercicio 35
console.groupEnd();

console.groupCollapsed("Ejercicio 36");
// Ejercicio 36
console.groupEnd();

console.groupCollapsed("Ejercicio 37");
// Ejercicio 37
console.groupEnd();

console.groupCollapsed("Ejercicio 38");
// Ejercicio 38
console.groupEnd();

console.groupCollapsed("Ejercicio 39");
// Ejercicio 39
console.groupEnd();

console.groupCollapsed("Ejercicio 40");
// Ejercicio 40
console.groupEnd();