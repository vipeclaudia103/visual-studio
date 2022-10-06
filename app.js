/*
 * var hace que no salte un error cuando una misma
variable se ha declarado con el mismo nombre dos veces entonces existe la posibilidad de que
te sobrescriban el codigo de una variable. Esto hace
que si mas addelante se declara una variable con el mismo nombre
se reescriba y no salte el error.

Por el contrario si declaramos la variable con let o const si salta el error 
y no permite q se ejecute

Aqui el ejemplo e los 3 casos
*/
//var
var ejVar = "castillo";
var ejVar = "pelota";
//----------comentendo desde aqui -----------
/*
//let
let ejLet = "bolsa";
let ejLet = "perrete";
//cont
const ejCont = "peluche";
const ejCont = "mosca";
console.log(item);
//----------hasta aqui funciona el código-----------
*/

var isLegal = "true";
var i = 0;
console.log(i + "| " + isLegal);
if (isLegal) {
  isLegal = "false";
} else {
  isLegal = "done";
}
console.log(i + "| " + isLegal);
