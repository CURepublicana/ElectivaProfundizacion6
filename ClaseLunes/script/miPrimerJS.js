const PI = 3.141695;
var variable1 = undefined;
let variable2 = undefined;

variable1 = prompt("Variable Nro 1: ", "(1 a 10)");
console.log(variable1);
alert("variable " + variable1);

// if(variable1 > 0 && variable1 < 100){
//     switch (true) {
//         case variable1 <= 20:
//             alert("valor Malo: " + variable1);    
//             break;
//         case variable1 <= 40:    
//             alert("valor ACEPTABLE: " + variable1);
//             break;
//         case variable1 <= 80:    
//             alert("valor BUENO: " + variable1);    
//             break;    
//         case variable1 >= 81:
//             alert("valor EXCELENTE: " + variable1);
//             break;    
//         default:
//             break;
//     }  
//     // if(variable1 > 0 && variable1 <= 20){
//     //     alert("valor Malo: " + variable1);
//     // }
//     // if(variable1 > 21 && variable1 <= 40){
//     //     alert("valor ACEPTABLE: " + variable1);
//     // }
//     // if(variable1 > 41 && variable1 <= 80){
//     //     alert("valor BUENO: " + variable1);
//     // }
//     // if(variable1 >= 81){
//     //     alert("valor EXCELENTE: " + variable1);
//     // }
// }else{
//     alert("valor No viable: " + variable1 + " ERROR!!!!");
// }

// if(variable1 > 0 && variable1 <= 10){
// //   centinela = 0;     01234567890;           ; paso x paso   
// for (let centinela = 0; centinela < variable1; centinela++) {
//     alert("Paso Número " + centinela);
// }
// }else{
//     alert("Parce se pifio!!!!" + variable1);
// }

let salir = false;
let contador = 0;
do {
    alert("variable: " + contador);
    contador++;
    if(contador == 10) salir = true;    
} while (!salir);

while (condition) {
    
}
