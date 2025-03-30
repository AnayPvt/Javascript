// OBJECTS , FUNCTIONS AND EVENTS

/*
OBJECTS CAN BE CREATED BY 2 MEANS : CONSTRUCTOR AND LITERAL
WHILE WE DECLARE USING LITERALS , "singleton" dont form 
WHEREAS WHEN WE DECLARE USING CONSTRUCTOR , "singleton" FORMS
*/

// OBJECT LITERALS : 

/*
 FORMED USING CURLY BRACKETS ALSO IT ACCEPTS KEY : VALUE FORMAT
 VERY SIMILAR TO DICTIONARY IN PYTHON
 YOU CAN STORE ANY DATATYPE IN "VAALUE" PART BE IT STRING , NUMBER , OBJECT , BOOLEAN ETC
*/


// HOW TO USE "SYMBOL" DATATYPE IN OBJECTS "KEYS"??

let mySym = Symbol("key1")

// ADDED THIS IN THE ORIGINAL OBJECT BUT IN "SQUARE BRACKS"



const Jsuser = {
    name : "ANAY" , 
    "yearOfJoining" : 2024 , 
    [mySym] : "key1" , 
    course : 'COMPUTER SCIENCE' ,
    PassedFirstSem : false ,
    rollNo : [ 4 , 8 , 0 , 7 , 0 ]    
}   

// SYSTEM PROCESSES NAME AS "STRING"  

console.log(Jsuser[mySym])  // DECLARE SYMBOL WITHOUT ANY STRING INSIDE SQ BRACKS

// THERE ARE 2 WAYS TO ACCESS OBJECTS : [USING THE KEY SIMILAR TO DICT IN PYTHON]

console.log(Jsuser.name)
console.log(Jsuser["name"])  // NAME IN STRING CAUSE WE KNOW SYSTEM PROCESSES "KEYS" AS STRING

// THE 2 METHOD I.E THE SQ BRACK ONE IS MORE PROMINENT CAUSE IT CAN ALSO TAKE "KEYS WRITTEN IN STRING" 
// EXAMPLE

// console.log(Jsuser."yearOfJoining");  // WILL THROW ERROR CAUSE INVALID SYNTAX

console.log(Jsuser["yearOfJoining"])

// TO CHANGE SMTHG : 

console.log()

Jsuser.PassedFirstSem = true
console.log(Jsuser.PassedFirstSem)  // AS WE CAN SEE ITS TRUE

// NOW HERE I HAVE A "FREEZE" METHOD TOO IN WHICH ONCE I FREEZE OBJECT ,THE VALUES INSIDE KEY WONT CHANGE

Object.freeze(Jsuser)   // AN OBJECT METHOD
Jsuser.course = "BCOM"  // EVEN THO IT WONT THROW ERROR BUT CHANGE WONT TAKE PLACE
console.log(Jsuser.course)  // STILL COMPUTER SCIENCE


// FUNCTIONS : 

/*
TREAT AS VARIABLE  
IMAGINE WE WANNA GREET THE USER
USE PARENTHESIS CAUSE ITS A FUNCTION AND LATER THE OBJECT FORMAT
*/

const anayUser = {
    Name : "anay gupta" , 
    Above18 : true ,                    // CANT WRITE "18 ABOVE" CAUSE IT CANT FOLLOW A NUMERIC LITERAL
}

anayUser.greetings = function(){
    console.log("Good day , Js User")
}

anayUser.greetings()                // AND THEN JUS CALL THE FUNCTION

anayUser.greetings2 = function(){
    console.log(`GOOD DAY , ${anayUser.Name}`)// USE STRING LITERAL TO CALL FUNCTION OR "INTERPOLATION"
}


anayUser.greetings2(); 

// PRACTICE BY MYSELF : 

let pako = Symbol("annoying")

let you = {
    joe : "psychopath" ,
    beck : "cheater" ,
    love : "love" ,
    peach : "lesbian" , 
    [pako] : "annoying" , 
    Wshow : true
}

console.log(you[pako])

you.Wshow = false // CHANGED SMTHG

you.conclusion = function(){
    console.log(`OVERALL ${you.joe} SHOW`)
}

you.conclusion()

