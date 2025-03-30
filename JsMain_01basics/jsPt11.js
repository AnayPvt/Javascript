const { count } = require("console");

const name = "Anay"
const lastName = "Gupta"

console.log(name + lastName); //THIS IS AN OUTDATED SYNTAX AND NOT RECOMMENDED


console.log(`HELLO MY NAME IS ${name} ${lastName}`)  // USE BACKTICKS I.E STRING INTERPOLATION

// OBJECT AND STRINGS : 

const gameName = new String(" ANAY FC ")
console.log(gameName);

/*
 HERE I USED STRING CLASS AND MY REFERENCE VAR NAME IS "gameName" , ALSO I USED THE "NEW" KEYWORD TO
  INITIALIZE THE OBJECT.
IF YOU RUN THESE 2 LINE OF CODE IN GOOGLE CONSOLE , THE OUTPUT WILL BE IN THE FORMAT OF KEY VALUE PAIR
*/

console.log(gameName[0]);  // SIMILAR TO INDEXING IN PYTHON AND JAVA USING [] BRACKS

console.log(gameName.__proto__);

/*
 IN LINE "console.log(gameName.__proto__);" , IT ACCESS THE PROTOTYPE OF "gameName" which is "String"
   AND RETURNS AN EMPTY OBJECT IN VS CODE , BUT IF YOU RUN IN GOOGLE CONSOLE , THE OBJECT HAS 
   ACCESSED ALL THE STRING METHODS
*/


// USING FEW METHODS 

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.toLowerCase())
console.log(gameName.concat(" " , name))
console.log(gameName.replace('A' , 'T'))   // REPLACE REPLACES THE FIRST OCCURENCE
console.log(gameName.split(" "))

console.log(gameName[0])          // THE OG INDEXING METHOD

console.log(gameName.trim())        //TRIMMED BOTH STARTING AND ENDIN WHITE SPACES
console.log(gameName.trimStart())   //TRIMMED STARTING WHITE SPACES
console.log(gameName.trimEnd())     //TRIMMED ENDING WHITE SPACES

console.log(gameName.includes('FC'))   //GIVES TRUE

console.log(gameName.concat("W"))
console.log(gameName.at(2))      // STRING INDEXING METHOD


let prt1 = console.log(gameName.toUpperCase())
console.log(prt1)    // UNDEFINED BECAUSE "PRINT" DOES NOT RETURN ANYTHING I.E AN EMPTY VARIABLE  


let text = "HELLO WORLD";
let char = text.charCodeAt(0);
console.log(char)    // RETURNS THE UTF-16 COODE OF THE CHAR 'H'


//----------------------------------------------------------------------------------------------------

//  STRING SLICING METHOD

let slice = "APPLE"
let sliced = slice.slice(2 , 4)  // SIMILAR TO PYTHON , STARTING FROM 2 UPTO 4
console.log(sliced)

//console.log(slice[2 , 4])  // INVALID SYNTAX IN JAVASCRIPT

//----------------------------------------------------------------------------------------------------

/*
 PADDING IN JAVASCRIPT
 -padStart
 -padEnd

 IN THIS THE THE FIRST FILLING IS "HOW MUCH LENGTH YOU WANT" AND SECOND FILLING IS "WITH WHAT YOU WANNA FILL"
*/

let padd = "722"
console.log(padd.padStart(5 , "0"))  //00722
console.log(padd.padStart(5))       // GIVE 2 EXTRA EMPTY SPACES IN THE START / "EMPTY STRING"
console.log(padd.padEnd(8 , "2" ))  // 72222222

// console.log(padd.padd(0))   // WILL THROW ERROR CAUSE IT CANT BE LESS "PADDING" MEANS "ADDING"



// REPEAT METHOD

String = "ANAY"
console.log(String.repeat(2))  // THE AMOUNT OF TIME SU WANNA REPEAT IN THIS CASE  "2"



