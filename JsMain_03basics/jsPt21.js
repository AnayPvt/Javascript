// GLOBAL ND LCOCAL SCOPE

/* WHAT IS SCOPE - Scope defines where your variable , function and objects are accessible within your code

, SCOPE IS IN {}

        - CURLY BRACES IS ALSO USED TO DECLARE OBJECTS
        BUT WHEN WE USE CURLY BRACES WITH CONDITIONAL STATEMENTS OR LOOP OR FUNCTION
        , WE ARE DECLARING A SCOPE

*/

var c = 300


if (true){
    
let a = 10
const b = 20
var c = 30

}

// console.log(a);
// console.log(b);
console.log(c); 

/* 

IF YOU UNCOMMENT THE CONSOLE LOG A AND B , WE CAN CLEARLY SEE THAT IT WILL THROW ERROR "AS IT SHOULD" BECAUSE THE VARIABLES WERE DECLARED INSIDE THE IF STATEMENT AND CANNOT BE USED CALLED/PRINTED OUTSIDE

WHEREAS IN THE VARIABLE "C" IT IS PRINTED OUTSIDE THE IF STATEMENT WHICH bREAKS THE FUNDAMENTAL LOGIICS THATS WHY WE DONT USE VARIABLES USING "var" KEYWORD AND PREFER "let" and "const".

THEREFORE "var" IS NEVER BLOCK SCOPED 

LOCAL / BLOCK SCOPE - Whatever we write inside a loop , or conditional statements are "BLOCK/LOCAL SCOPE"
            Variables declared with "let" and "const" are block scoped
            They are only accessible within the block they are defined in
            

GLOBAL SCOPE - A variable has global scope if it is declared outside any function, block, or module.
            Accessible Everywhere: Variables in the global scope can be accessed and modified from any part of the program.

*/

let globalVar = 11

console.log(globalVar);

function global(){
    console.log(globalVar)
}


global()

if (true){
    console.log(globalVar);
}

// HERE WE CAN SEE A GLOBAL VARIABLE CAN BE ACCESSED BOTH INSIDE AND OUTSIDE THE FUNCTION AND IN {} BLOCKS AS WELL

// LETS TAKE ANOTHER EXAMPLE WHERE WE USE 2 VARIABLES WITH SAME NAME

a = 300

console.log("GLOBAL:" , a);

if (true){
    a = 40
    console.log("INNER:" , a);
}

// WE USE 2 VARIABLES WITH THE NAME "A" AND THE STATEMENT HAS ITS OWN "A" WHICH IS ACCESSIBLE IN IT ONLY WHEREAS THE GLOBAL ONE I.E 300 IS ACCESSSIBLE EVERYWHERE.

