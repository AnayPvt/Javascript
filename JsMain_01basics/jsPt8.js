// COMPARISION OF DIFFERENT DATATYPES - (EXAMPLE)

console.log("2" > 1);
console.log("02" > 1);

/*
WELL JAVASCRIPT ITSELF CONVERTS THE STRINGS TO NUMBER AND DOES THE COMPARISION , 
EVEN THO SUCH COMPARISION "MAKES NO SENSE" AND SHOULD BE AVOIDED AND MADE SURE TO ALWAYS USE
"SAME DATATYPES" WHILE COMPARING AS WHEN YOU'LL LEARN JAVASCRIPT THERE WILL BE SOME STRICT RULE 
AND IT WILL THROW ERROR FOR SUCH LINE OF CODE
*/

console.log()

console.log(0 > null)
console.log(0 == null)
console.log(0 >= null) ; console.log( null>= 0) , console.log( null<= 0)

/*
HERE IT THROWS "FALSE" ON == BECAUSE EQUALITY CHECK I.E == AND COMPARISION OPERATOR (> , < , >= , <=)
THEY WORK DIFFERENTLY AND SO >= AND <= WILL THROW TRUE BUT == WILL THROW FLSE CAUSE THEY WORK DIFFERENTLY
SO ITS ALWAYS BETTER TO AVOID SUCH CODE AND FOCUS ON CLEAN CODE
*/


console.log("1" === 1) // WILL GIVE FALSE CAUSE IT CHECK DATATYPE I.E THE "STRICT CHECK OPERATOR(===)" 



