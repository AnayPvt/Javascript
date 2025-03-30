// FUCTIONS AND PARAMETERS

/*
FUNCTTION SYNTAX : function nameOfFn(){
                                }
IN THE PARENTHESIS , WE GIVE PARAMETERS/ARGUMENT IF ANY
*/

function anay(){
    console.log("A");
    console.log("N");
    console.log("A");
    console.log("Y");
}

anay     // REFERENCE OF FUNCTION
anay()   // EXECUTION OF FUNCTION

// LETS MAKE A FUNCTION TO MULTIPLY TWO NUMBERS


function mul(n1 , n2){
    console.log(n1*n2);
} 

mul(2 , 3)   // RETURNS IN "NUMBER" FORMAT
mul("2" , 3)  // SMART ENGH TO CONVERY STRING TO NUMBER

mul(null , 3)   // CONVERTS NULL TO 0

/*
DIFFEREN BETWEEN PARAMETERS AND ARGUMENTS : 

   THE VALUE YOU GIVE "WHEN YOU DEFINE A FUNCTION I.E n1 and n2" are "PARAMETERS"
   WHEREAS THE VALUE "WHEN YOU CALL THE FUNCTION" ARE "ARGUMENTS"
*/

// NOW LETS SEE WHETTHER A FUNCTION STORES VALUE OR NOT

const result = mul(3 , 5)    // WILL BE UNDEFINED

// IT IS UNDEFINED BECAUSE THE FUNCTIONS PRINTS AND DOES NOT RETURN

// LETS MAKE ANOTHER FUNCTION WHICH RETURNS
console.log();

function store(number1 , number2){
    
    return number1 + number2
}

const stored = store(3 , 9)
console.log(stored);

// THIS TIME IN THE "STORE FUNCTION" IT STORES THE VALUE BECAUSE IT RETURNS A VALUE WHICH IS THEN STORED IN VARIABLE

console.log(store(3 , 2))

// ALSO COMMON KNOWLEDGE , YOU CANNOT MAKE FUNCTION EXECUTE ANYTHING AFTER PASSING THE "RETURN" KEYWORD

// CAN EVEN USE BBACKTICKS

function justLoggedIn(username){
    return `${username} JUST HOPPED IN THE SERVER`
}

console.log(justLoggedIn("ANAY"));

console.log();

function calculator(n1 , n2){
    return `ADDITION OF THE TWO NUMBERS IS             : ${n1 + n2}
SUBTRACTION OF THE TWO NUMBERS IS          : ${n1 - n2}
MULTIPLICATION OF THE TWO NUMBERS IS       : ${n1 * n2}
DIVISION OF THE TWO NUMBERS IS             : ${n1 / n2}
MODULUS                                    : ${n1 % n2}
EXPONENTIAL                                : ${n1**n2}

FLOOR DIVISION WHICH ROUNDS OFF DOES NOT EXIST`

}

console.log(calculator(8 , 8));

console.log();

// ALWAYS REMEMBER WHEN NO ARGUMENT IS PASSED , THE OUTPUT IS "UNDEFINED" AND STRING IF ANY

function undefine(username){
    if(username===undefined){
        console.log("NO ARGUMENS PASSED");
       
    }
    
}

console.log(undefine())