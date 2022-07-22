/**
console.log("Hola a todos");

// Variables, tyoeOf nos muestra el tipo de variable q tiene el dato

var yearOldJulanito, yearJulanito;
yearJulanito = 15;
yearOldJulanito = 1993;
console.log(typeof(nombre));

// Operadores matematicos
var subtract;
subtract = yearJulanito - yearOldJulanito;
console.log("la resta es la siguiente " + subtract);

// operadores logicos son los de tipo comparacion

var more;

more = yearJulanito > yearOldJulanito;

console.log(more);

// unarios que son los ++ o --

yearJulanito++
console.log(yearJulanito);
yearJulanito--
console.log(yearJulanito);

// Asignación, +=, -=, *=, /=, %=

yearJulanito += yearOldJulanito;
console.log(yearJulanito);

// Sentencias de condicion 

// for

for (var i = 5; i <= 25; i += 5) {
    console.log(i);
}

 */

/**
// while 

var i = 1
while (i <= 10) {
    console.log(i);
    i++
}

console.log(i);

 */


/**
// test js

var argumentos = [
    [3, 4],
    [12, 32, 89],
    [0]
]

function fixMe(my_list) {

    var new_list = [];

    for (item of my_list) {
        for (element of item) {
            new_list.push(element);
            new_list.sort(function(a, b) { return b - a });
        }
    }

    return new_list;
}

 */

/**
 
 * funciones recursivas
  
 var factorial = function(n) {
    if ((n == 0) || (n == 1)) {
        return 1;
    } else {
        return (n * factorial(n - 1))
    }
}

console.log(factorial(5));
 */