// OPERATIONS


let str = "helo "
let str1 = "anay"

let merge = str + str1

console.log(merge)
console.log(str , str1)   //COMMA GIVES A SPACE/WHITESPACE ON ITS OWN
console.log(str + str1)

console.log()

//----------------------------------------
  
console.log(1 + 2)  // 3
console.log("1" + 2)   // 12
console.log(1 + "2")   //12
console.log("1" + 2 + 2)   //122
console.log(1 + 2 + "2")   //32

/*
IN LINE 20 AND 21 WE CAN SEE , LINE 20 NOT PERFORMING ARITHEMATIC OPERATION AND CONSIDERING IT ALL STRING
WHEREAS IN LINE 21 , WE SEE IT DOES ARITHEMATIC OPERATION AND THEN CONSIDERS IT WITH STRING
WELL CALL IT A BUG OR WHATEVER IT IS WHAT IT IS

"WHATEVER TYPE COMES FIRST WILL BE EXECUTED"
*/

//NOW ANOTHER ANNOYING THING

console.log(3 + 6 * 9 % 8) 

//THE ABOVE LINE OF CODE IS GREAT BY EXAM POV BUT IT WONT BE "APPRECIATED IN CORPORATE WORLD"
//  WHY WRITE SUCH WAY WWHEN WE CAN USE PARENTHESIS AND DEFINE

console.log((3 + 6) * (9 % 8) )

//AGAIN SOME CONFUSING CODE WHICH HAS NO USE BUT HELP UNDERSTAND JS BETTER

console.log()

console.log(true)      //prints true
// console.log(true+)  //error cause it cant convert boolean to interger/number
console.log(+true)     //prints 1 as it first considers the further code in "integer/number"
console.log(+"")       //converts null string to null number/integer i.e"0"

// NOW THERES ONE TRICKY ASSIGNMENT OPERATOR TOO WHICH IS NOT MUCH RELEVANT EITHER

let num1 , num2 , num3   //did not assign any val
num1 = num2 = num3 = 2+2 //all are assigned 4 but there are better ways to declare variable

//INSTEAD THERES A BETTER WAY

let a = 2,
    b = 3,
    c = 4;


