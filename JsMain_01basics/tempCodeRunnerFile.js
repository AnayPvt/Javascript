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

console.log(gameName.charAt(0))   // GIVE THE INDEX VALUE AND IT RETURNS
console.log(gameName[0])          // THE OG INDEXING METHOD

console.log(gameName.trim())        //TRIMMED BOTH STARTING AND ENDIN WHITE SPACES
console.log(gameName.trimStart())   //TRIMMED STARTING WHITE SPACES
console.log(gameName.trimEnd())     //TRIMMED ENDING WHITE SPACES

console.log(gameName.includes('FC'))   //GIVES TRUE
