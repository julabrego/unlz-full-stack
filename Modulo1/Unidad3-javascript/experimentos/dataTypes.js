// javascript es "diánmicamente tipado": existen los tipos, pero las variables no están limitadas a uno sólo

// no error
let message = "hello";
message = 123456;

// number: tanto int como float, double, etc
let n = 123;
n = 10.34;

// special numeric values. Son de tipo number
// Infinity
let infinity = 1 / 0;
// let infinity = Infinity

// not a number
let nan1 = NaN + 1; // NaN
let nan2 = 3 * NaN; // NaN

// Devuelve 1. Única excepción
let salirDeNan = NaN ** 0;

// BigInt
// Todos los números menores a (2 elevado a 53 -1) pueden ser almacenados en number
// los superiores son BigInt
// son recomendados para números grandes de los que se desconoce la extensión que puedan tener
// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;
// muy raros

// String
let nombre = "Julián";
// embed a variable
alert(`Hello, ${nombre}!`); // Hello, John!

// embed an expression
alert(`the result is ${1 + 2}`); // the result is 3
// !== 
alert("the result is ${1 + 2}"); // the result is 3

// no existe tipo character

// Boolean
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

let isGreater = 4 > 1;
alert(isGreater); // true (the comparison result is "yes")

// valor "null". No pertenece a ningún tipo. Solo contiene el valor null
// valor especial que representa "nada", "vacío" o "desconocido"
let age = null;


// "undefined"
// también es un tipo especial
// representa que "un valor no fue asignado"
let che;
alert(che); // shows "undefined"
// Se puede asignar undefined a una variable, pero se recomienda usar null


// Object y Symbols
// tipos especiales. No primitivos como los anteriores

// operador typeof
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)

/*
There are 8 basic data types in JavaScript.

Seven primitive data types:
number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
bigint for integer numbers of arbitrary length.
string for strings. A string may have zero or more characters, there’s no separate single-character type.
boolean for true/false.
null for unknown values – a standalone type that has a single value null.
undefined for unassigned values – a standalone type that has a single value undefined.
symbol for unique identifiers.
And one non-primitive data type:
object for more complex data structures.
The typeof operator allows us to see which type is stored in a variable.

Usually used as typeof x, but typeof(x) is also possible.
Returns a string with the name of the type, like "string".
For null returns "object" – this is an error in the language, it’s not actually an object.
*/