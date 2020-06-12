








//Estructura

// for(inicio; limite; secuencia){
//     instruccion
// }
// Empiece en 0  su  - 200 limite y la secuencia  5
// for(var a = 0;  a >= -200; a = a - 5){
//     console.log(a)
// }

// // Empiece en 500  su limite 0 y la secuencia 10



// for( var b = 500; b >= 0; b = b - 10){
//     console.log(b)
// }



// // Empiece en -500  su limite 0 y la secuencia 50

// for( var b = -500; b <= 0; b = b + 50){
//     console.log(b)
// }



// --------------------------Challege Cool-----------------
// Del 1 al 100
// Si el numero es divisible entre 3 ----> Fizz
// Si el numero es divisible entre 5 ----> Buzz
// Si el numeor es divisible entre 3 y 5 ---> FizzBuzz
// Ejemplo: 
// 1 
// 2
// 3 Fizz
// 4
// 5 Buzz
// ...
// 15 FizzBuzz
// 16
//Errores
// 15 fizz
// 15 buzz
// 15 fizzBuzz
// for(var x = -500;  x <= 0 ; x = x +50 ){
//     if(){
//         console.log(object)
//     }
// }





var a;
for (a = 1; a <= 100; a = a + 1) {
    if (a % 3 === 0 && a % 5 === 0) {
        console.log(a + "FizzBuzz")
    } else if (a % 3 === 0) {
        console.log(a + "Fizz")

    } else if (a % 5 === 0) {
        console.log(a + "buzz")

    } else {
        console.log(a);

    }
}