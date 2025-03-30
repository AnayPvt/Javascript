// INTERVIEW PERSPECTIVE NOTES :

/*
ACCORDING TO OFFICIAL DOCUMENTATION , 
DATATYPES ARE OF 2 TYPES : 

1) PRIMITIVE DATATYPE  -   (I.E CALL BY VALUE I.E ORIGINAL DATA IS NOT GIVEN INSTEAD A COPY IS CREATED
                            AND CHANGES TAKE PLACE IN THE COPY)

   *PRIMITIVE IN ITSELF HAS 7 TYPES - 
        
    (A) STRING 
    (B) NUMBER
    (C) BOOLEAN
    (D) NULL ("NULL IS NULL", NEITHER EMPTY NOR ZERO )
    (E) UNDEFINED
    (F) BIG INT
    (G) SYMBOL (TO MAKE A VALUE UNIQUE , WE USE SYMBOL)

*/


//LETS DISCUSS SYMBOL DATAYPE

let symbol = Symbol('anay')
let symbol1 = Symbol('anay')

console.log(symbol === symbol1)

/*
EVEN THO WE PASSED THE SAME VALUE/STRING , THE RETURN VALUE WILL NOT BE THE SAME AND THATS THE POINT OF 
SYMBOL
/*

/*
2) NON-PRIMITIVE / REFERENCE DATATYPE - (THE DATATYPE WHOSE REFERENCE CAN BE DIRECTLY ALLOTED TO USER)

    (A) ARRAYS 
    (B) OBJECTS (MUST MASTER AND FOCUS ON)
    (C) FUNCTIONS  


THEY ARE DIFFERENTIATED ON 2 BASIS :- 
(A) ON THE BASIS OF HOW DATA IS STORED
(B) ON THE BASIS OF HOW DATA IS ACCESSED


--------------------------------------------------------------------------------------------------------

JavaScript is a dynamically typed language. This means that variable types are determined at runtime,
and you do not need to explicitly declare the type of a variable before using it. 
You can assign different types of values to a variable during its lifetime.

For example, in JavaScript, you can do the following:

let x = 10; // x is now a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean
On the other hand, statically typed languages require you to declare the variable's type explicitly, 
and the type checking is done at compile-time, before the code is executed.

Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the 
variable type explicitly when declaring them:

int x = 10; // x is a variable of type int
String name = "John"; // name is a variable of type String

JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if 
not handled carefully. Static typing, on the other hand, provides better type safety at the cost of 
some initial verbosity and strictness.

EXAMPLE BELOW - 
*/

var a = 12
var a = "String"
var a = true

console.log(typeof a)   //BOOLEAN 

// BECAUSE DURING RUNTIME , CODE IS INTERPRETED "LINE BY LINE"
// ALSO HERE'S ANOTHER REASON WHY "VAR" IS FLAWED AND THATS WHY PPL USE "LET" AND "CONST"

console.log()



