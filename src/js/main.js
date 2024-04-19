console.groupCollapsed("Estructuras If, If else, If Else-If")
console.log(8 < 10); //True
console.log("8" >= 6); //True

let hora = 13

if (hora > 8 && hora < 17) {
    console.info("Estoy en mi jornada laboral")
} else {
    console.info("No estoy en mi jornada laboral")
}

//let mes = prompt("Ingresa el mes actual:")

// if (mes == "enero") {
//     console.info("Es Enero")
// } else if (mes == "febrero") {
//     console.info("Es Febrero")
// } else if (mes == "marzo") {
//     console.info("Es Marzo")
// } else if (mes == "abril") {
//     console.info("Es Abril")
// } else if (mes == "mayo") {
//     console.info("Es Mayo")
// } else {
//     console.info("Ingresaste un mes que no entiendo")
// }

// let numeroMes = prompt("Ingresa el número del mes que quieres validad:")

// if (numeroMes >= 1 && numeroMes <= 3) {
//     console.info("Estas en el primer trimestre")
// } else if (numeroMes == 4 || numeroMes == 5 || numeroMes == 6) {
//     console.info("Estas en el segundo trimestre")
// } else if (numeroMes == 7 || numeroMes == 8 || numeroMes == 9) {
//     console.info("Estas en el tercer trimestre")
// } else if (numeroMes == 10 || numeroMes == 11 || numeroMes == 12) {
//     console.info("Estas en el cuarto trimestre")
// } else {
//     console.info("Ingresaste un número equivocado")
// }

// switch(numeroMes){
//     case 1||2||3:
//         console.info("Estas en el primer semestre del año")
//         break;
//     case 2:
//         console.info("Estas en el primer semestre del año")
//         break;
//     case 2:
//         console.info("Estas en el primer semestre del año")
//         break;
//     case 3:
//         console.info("Estas en el primer semestre del año")
//         break;
//     case 4:
//         console.info("Estas en el segundo semestre del año")
//         break;
//     default:
//         console.info("Ingresa un numero del 1 al 12")
//         break;
// }


// money= 500;
// let opcionMenu= prompt(`Ingresa una opcion [1-4]: 
// [1] Solicitar Almuerzo 
// [2] Solicitar Domicilio
// [3] Cancelar Orden
// [4] Finalizar Programa`)

// switch(opcionMenu){
//     case "1":
//         if (money>=20) {
//             console.log("Con gusto te atenderé")
//         } else {
//             console.log("Lo siento pero no podemos brindarte un servicio");
//         }
//         console.info("Solicitar Almuerzo")
//         break;
//     case "2":
//         console.info("Solicitar Domicilio")
//         break;
//     case "3":
//         console.info("Cancelar Orden")
//         break;
//     case "4":
//         console.info("Finalizar el Programa")
//         break;
//     default:
//         console.info("Ingresaste una opcion equivocada")
//         break;
// }

// if (opcionMenu=="1" && money>=200) {
//     console.log();
// } else {

// }

console.groupEnd();

// console.groupCollapsed("Ciclos For")

// console.groupCollapsed("Holas Mundos")
// for (let i = 0; i <= 10; i++) {
//     console.log("Hola Mundo, esta es la vuelta", i);
// }
// console.groupEnd();

// console.groupCollapsed("Tabla del 1")
// for (let i = 0; i <= 10; i++) {
//     let resultado = 1 * i;
//     console.log(`1 * ${i} = ${resultado}`);
// }
// console.groupEnd();

// console.groupCollapsed("Tabla del 2")
// for (let i = 0; i <= 10; i++) {
//     let resultado = 2 * i;
//     console.log(`2 * ${i} = ${resultado}`);
// }
// console.groupEnd();

// console.groupCollapsed("Tabla del 3")
// for (let i = 0; i <= 10; i++) {
//     let resultado = 3 * i;
//     console.log(`3 * ${i} = ${resultado}`);
// }
// console.groupEnd();

// console.groupCollapsed("Tabla del 4")
// for (let i = 0; i <= 10; i++) {
//     let resultado = 4 * i;
//     console.log(`4 * ${i} = ${resultado}`);
// }
// console.groupEnd();

// console.groupCollapsed("Tabla del 5")
// for (let i = 0; i <= 10; i++) {
//     let resultado = 5 * i;
//     console.log(`5 * ${i} = ${resultado}`);
// }
// console.groupEnd();

// console.groupCollapsed("Tabla del 6")
// for (let i = 0; i <= 10; i++) {
//     let resultado = 6 * i;
//     console.log(`6 * ${i} = ${resultado}`);
// }
// console.groupEnd();

// console.groupCollapsed("Tabla del 7")
// for (let i = 0; i <= 10; i++) {
//     let resultado = 7 * i;
//     console.log(`7 * ${i} = ${resultado}`);
// }
// console.groupEnd();

// console.groupCollapsed("Tabla del 8")
// for (let i = 0; i <= 10; i++) {
//     let resultado = 8 * i;
//     console.log(`8 * ${i} = ${resultado}`);
// }
// console.groupEnd();

// console.groupCollapsed("Tabla del 9")
// for (let i = 0; i <= 10; i++) {
//     let resultado = 9 * i;
//     console.log(`9 * ${i} = ${resultado}`);
// }
// console.groupEnd();

// console.groupCollapsed("Tabla del 10")
// for (let i = 0; i <= 10; i++) {
//     let resultado = 10 * i;
//     console.log(`10 * ${i} = ${resultado}`);
// }
// console.groupEnd();

// console.groupEnd()

// for (let t = 1; t <= 10; t++) {
//     console.log(`Tabla del número ${t}`);
//     for (let i = 0; i <= 10; i++) {
//         console.log(`${t}*${i} = ${t * i}`)
//     }
//     console.log("");
// }

// let conocida=["Luisa", "Maria", "Valentina", "Daniela"]

// for (let i = 1; i < conocida.length; i++) {
//     for (let j=1; j<=100;j++){
//     document.writeln(`Lo siento mucho ${conocida[i]}, no volvera a pasar. No se donde tenía la cabeza`);
//     }
// }

let i = 1
while (i <= 10) {
    console.log(`9 * ${i} = ${9*i}`);
    cont++;
}