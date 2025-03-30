// DATATYPE CONVERSION  -
let score = "33"
let scoreInNum = Number(score)   //TYPE CONVERSION TO NUMBER
console.log(typeof score)        // STRING
console.log(typeof scoreInNum)   // NUMBER

let score1 = "33abc"
let scoreInNum1 = Number(score1)   //TYPE CONVERSION TO NUMBER
console.log(typeof score1)         //STRING
console.log(typeof scoreInNum1)    //NUMBER BUT "WHY??"

/*
HERE THE 10TH LINE SHOULD NOT BE A NUMBER CAUSE THERE ARE ALPHABETS IN IT , 
NOW LETS LOOK WHAT IT PRINTS INSIDE THE VARIABLE VALUE
*/

console.log(scoreInNum1)
/*
HERE WE CAN SEE IT PRINTS "NaN" I.E "NOT A NUMBER" , THEREFORE EVEN IF THE TYPE SAYS NUMBER 
IT DOES NOT NECESSARILY MEANS ITS A NUMBER
*/

//LETS TRY IN ON MULTIPLE DATATYPES

console.log()
console.log()

let score2 = null
let score3 = undefined
let score4 = true
let score5 = false

let scoreInNum2 = Number(score2)
let scoreInNum3 = Number(score3)
let scoreInNum4 = Number(score4)
let scoreInNum5 = Number(score5)

console.log(typeof scoreInNum2)   
console.log(typeof scoreInNum3)   
console.log(typeof scoreInNum4)   
console.log(typeof scoreInNum5)   

/*
HERE WE CAN SEE THEIR TYPE IS "NUMBER"
*/

console.log(typeof score2)    //OBJECT
console.log(typeof score3)    //UNDEFINED
console.log(typeof score4)    //BOOLEAN
console.log(typeof score5)    //BOOLEAN


console.log()
console.log()

//NOW HERE IS ANOTHER INTERESTING PART

console.log(scoreInNum4)  //PRINTS 1 I.E TRUE IN NUMBER IS 1
console.log(scoreInNum5)  //PRINTS 0 I.E FALSE IN NUMBER IS 0
console.log(scoreInNum2)  //PRINTS 0 I.E NULL IN NUMBER IS 0

//SO WHAT FOR UNDEFINED?? WELL ITS JUST "NaN"

console.log()

//NOW CAN WE CONVERT A NUMBER TO BOOLEAN I.E "1 TO TRUE" AND "0 TO FALSE"

let boolean = 1
let boolean1 = 0 


let BooleanInBoolean = Boolean(boolean)
let BooleanInBoolean1 = Boolean(boolean1)

console.log(BooleanInBoolean)
console.log(BooleanInBoolean1)

//HERE AS WE CAN SEE WE CAN



