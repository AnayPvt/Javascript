const money = 400 
console.log(money)

// WE CAN SEE IN THE ABOVE LINE OF CODE , IT IS A NUMBER DATATYPE

const price = new Number(850)
console.log(price)

/*
WELL THE DIFFERENCE HERE IS , WE EXPLICITLY DEFINE THAT "price" VARIABLE HAS "NUMBER TYPE"
*/

// FEW NUMBER METHODS BELOW

let conversion = money.toString()  // CONVERTS NUMBER TO STRING
console.log(conversion)
console.log(typeof conversion)

// WITH THIS , WE CAN USE STRING PROPERTIES NOW TOO

console.log(money.toString().length);

// -------------------------------------------------------------------------------------------------------- 

/*
THEN THERE'S ANOTHER FUNCTION WHICH IS "toFixed" WHICH IS USED WHEN PRECISION VALUE IS TOO LONG LIKE
   400.2734724678234 SO IF YOU GIVE "toFixed(2)" , IT WILL KEEP 400.27 AND IT IS MAJORLY USED IN 
   E-COMMERCE WEBSITE ETC
*/


console.log(money.toFixed(2))
console.log(money.toFixed(5))


// THEN THERE IS "toPrecision()" [VALUES CAN BE B/W 1-21]  , IT DOES ROUND OFF OF CONSIDERED DIGITS

const SomeMoney = 24.89966

console.log(SomeMoney.toPrecision(3))  // WILL TAKE ONE DIGIT AFTER DECIMAL IN CONSIDERATION TOO 
console.log(SomeMoney.toPrecision(2))


// priorittize digits before decimal i.e "2" in this case


// ANOTHHER IMORTANNT FUNCTION IS "localString" WHICH CAN BE USED IN MANY WAYS BUT THE MAJOR WAY - 

const comms = 1000000
console.log(comms.toLocaleString()); // GIVES COMMAS ACCORDING TO "INTERNATIONAL STANDARDS"(DEFAULT)

// TO CONVERT INTO INDIAN STANDARDS , WE USE "en-IN" IN STRING FORM 

console.log(comms.toLocaleString('en-IN'));

// --------------------------------------MATHS-----------------------------------------------------------

/*
SIMILAR TO HOW WE "import math" MODULE IN PYTHON , WE HAVE GOT "IN BUILT MATH LIBRARY/FN" IN JAVASCRIPT   
"M" capital i.e "Math"
*/   

console.log(Math);
console.log(Math.abs(-7));  // ABSOLUTE VALUE

let radius = 3;
let circumference = 2 * Math.PI * radius; // CIRCUMFERENCE = 2 PIE * R

console.log(circumference)
console.log(7 * Math.PI)  // Math.PI give the value "3.141..."

console.log(Math.round(4.8))  // ROUND OFF TO THE NEAREST INTEGER
console.log(Math.round(4.2))

// THEN THERES ANOTHER FUNCTION I.E "ceiling" , WHAT IT DOES IS IT CHOOSES "TOP VALUE" ONLY

console.log()

console.log(Math.ceil(4.1)) // WILL DO '5' CAUSE ITS THE TOP VALUE AND NOT '4'
console.log(Math.ceil(4.9))

// THEN THERES ANOTHER FUNCTION I.E "floor" , WHAT IT DOES IS IT CHOOSES "BOTTOM VALUE" ONLY

console.log()

console.log(Math.floor(4.9)) // WILL DO '4' CAUSE ITS THE BOTTOM VALUE AND NOT '5'
console.log(Math.floor(4.1))

//ALWAYS PREFERRED TO USE "ROUND" THO

// FEW MORE FUNCTIONS - 

console.log(Math.sqrt(25))  // 5
console.log(Math.pow(5 , 2))    // 5 IS THE BASE VALUE AND 2 IS THE EXPONENTIAL VAL I.E 25
console.log(Math.min(4 , 3 , 7 , 2 ))
console.log(Math.max(4 , 2 , 1 ,4 , 8))

// THEN THERE IS THE MOST IMPORTANT FUNCTION I.E "Math.random" : 
// THE VALUE WILL ALWAAYS BE B/W 0 AND 1

console.log(Math.random()) 
console.log((Math.random()*10) + 1)// ADDING 1 BECAUSE THERE IS A POSSIBILITY THE RETURNED NO. CAN BE "0"
console.log((Math.random()*100) + 1) 

// AND TO GET ITS ROUND OFF ADD "FLOOR"

console.log(Math.floor((Math.random()*100) + 1))  // AIGHT TO GET THE ROUNDOFF

// AND IF YOU NEED ANY YOU KNOW CONDITION THAT THERE SHOULD BE A MINIMUM SO FOR THAT ::

const min = 7
const max = 20

console.log(Math.floor((Math.random()*(max - min + 1) + min)))
// + MIN IN THE END TO MAKE SURE ATLEAST A CERTAIN VAL

// (MAX - MIN + 1) IS A CERTAINLY IMP FORMULA