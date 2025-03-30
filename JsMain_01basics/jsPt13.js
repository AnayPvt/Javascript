// DATE AND TIME

/* 
THERE IS A PROPOSAL BY ECMA TO MADE A GLOBAL MODULE LIKE "Math" WHICH IS "Temporal" BUT AGAIN ITS NOT
RELEASED WHICH WILL HELP TO WORK WITH DATE AND TIME WAY EASIER
*/

//NOW BACK TO MAIN TOPIC "DATE AND TIME" , WE FIRST CREATE DATE OBJECT USING DATE CLASS

const NewDate = new Date()
console.log(NewDate)  // WILL GIVE DATE 
console.log(NewDate.toString())   // PRIORITIZE AS ITS MOST ACCURATE (IN INDIAN STANDARD TIME)

console.log()
console.log()

console.log(NewDate.toJSON())
console.log(NewDate.toISOString())
console.log(NewDate.toLocaleString())  // SIMILAR TO STRING BUT IN DIFFERENT FORMAT AND WONT TELL DAY
console.log(NewDate.toLocaleDateString())  // WILL GIVE DATE IN "LocaleString FORMAT"
console.log(NewDate.toLocaleTimeString())  // WILL GIVE TIME IN "LocaleString FORMAT"
console.log(NewDate.getUTCFullYear())      // WILL TELL YEAR


console.log(NewDate.getTimezoneOffset())   
// DIFFERENCE B/W LOCAL TIME (I.E IST) AND INTERNATIONAL TIME IN MINUTES

//ALSO DATE IS AN "OBJECT" IN JAVASCRIPT

console.log(typeof NewDate);

// TO DECLARE A SPECIFIC DATE

let mydate = new Date(2023 , 0 , 24)   // yy : mm : dd

/* 
MONTHS START WITH 0 I.E "0 FOR JANUARY" AND "11 FOR DECEMBER"
*/
console.log(mydate.toDateString());    // USING METHOD FOR BETTER READABIITY

// IT CAN ALSO FURTHER DECLARE TIME


let mydateTime = new Date(2023 , 11 , 24 , 16 , 4 , 9)   // 16 CONVERTED TO 4 AND MAKES P.M
console.log(mydateTime.toLocaleString())

// ANOTHER SYNTAX

let mydateTime2 = new Date("01-13-2023")   // MM-DD-YY PREFFEERRRED IN THIS SYNTAX
console.log(mydateTime2.toLocaleString())

// TIME STAMP : 

let myTimeStamp = Date.now()

console.log(myTimeStamp)  // COMES IN "MILLISECONDS" FROM 1 JAN 1970(ACC TO MDN DOC) TO PRESENT DAY

console.log(mydateTime2.getTime()) 

// TO CONVERT INTO SECONDS

console.log()

console.log(Math.round(Date.now()/1000))  // DIVIDE BY 1000 BECAUSE 1 SECOND = 1000 MILLISECONDS
                                        // MATH.ROUND TO ROUNDOFF

// INTERESTING THING ABOUT.toLocaleString


console.log()

console.log(NewDate.toLocaleString('default' , {
    weekday: "long" , day: "2-digit" 
}))

// HERE WE CAN CUSTOMIZE LOCALE STRING ACC TO OUR NEEDS AND STUFF , HERE THE OUTPUT IS "SATURDAY 25"



