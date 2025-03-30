// CONTROL FLOW/LOGIC CONTROL

// WELL YOU KNOW ITS NOT NECESSARY FOR ALL THE CODE TO BE EXECUTED WHEN THERE ARE CONDITIONS - 

// 1) IF STATEMENT

if(true){        // CODE IS EXECUTED WHEN CONDITION IS TRUE
}

if(false){      // CODE IS NOT EXECUTED WHEN CONDITION IS FALSE TILL THE SCOPE {} IS OVER
}

isLoggedIn = true;

if(isLoggedIn){
    console.log(`WELCOME USER`);
}

// < , > , <= , >= , == , != , === [also does type checking

if("2"===2){
    console.log('TYPE CHECKED SO WONT BE EXECUTED');
}
if("2"==2){
    console.log('JS WILL ITSELF ONVERT STRING 2 TO NUM2 AND EXECUTE IT');
}

// ALWAYS REMEMBER CONDITION IS ALWAYS A QUESTION AND THE ANSWER IS ALWAYS EITHER "TRUE"/"FALSE"

const temperature = 41

if(temperature<50){
    console.log("TEMPERATURE NOT THAT HIGH");
}
else{
    console.log("TEMPERATURE PRETTY HIGH");
}

//-------------------------------------

let score = 200

if(score>100){
    const power =  "CONST"
    console.log(`USER : ${power}`);
}


// console.log(`USER : ${power}`); 
// THE ABOVE LINE WILL THROW ERROR BECAUSE "power" IS A BLOCK OBJECT/VARIABLE AND NOT A GLOBAL VARIABLE

let score1 = 200

if(score>100){
    var power =  "VAR"
    console.log(`USER : ${power}`);
    
}
console.log(`USER : ${power}`);

// HERE THE ABOVE LINE OF CODE WILL BE EXECUTED EVEN OUTSIDE THE BLOCK SCOPE BECAUSE "var" IS A GLOBAL OBJECT THAT'S WHY WE DONT USE "var"

// THERES ANOTHER SYNTAX I.E "IMPLICIT SCOPE" WHERE WE DONT USE {} BUT IT REDUCES READABILITY AND NOT PREFFERRED

const balance = 500

if(balance<1000) console.log("LOW BAL");

// NOT A PREFERRED SYNTAX

/// ---------------------------------------------
console.log()
// ELSE-IF  [TO CHECK MULTIPLE CONDITIONS "ONE AFTER ANOTHER"]

if(balance>1000){
    console.log('more than 1000')
}
else if(balance>750){
    console.log('more than 750')
}
else if(balance>400){ 
    console.log('more than 400')
}
else if(balance>300){ 
    console.log('more than 300')
}
else{
    console.log('IDK');
}

// "ELIF" ONLY EXISTS IN PYTHON , WE USE "ELSE-IF" IN JAVA AND JS

/*
 ANOTHER THING WHEN WE USE "else-if" . EG If balance > 400 which is true , then the "more than 400" condition executes first, and "more than 300" is never reached. therefore it wont execute/print multiple statements]
*/

console.log();

// ----------------------------------------------------------------------------

// LOGICAL OPERATORS [ AND , OR , NOT I.E && , || , !]

//TO CHECK MULTIPLE SEPERATE CONDITIONS IN THE SAME PLANE AND GIVING THEM ONE SINGLE EXECUTION, WE USE 
// 1)      && [and]

const userLoggedIn = true
const debit = true
const emailFormat = !false  // USED NOT OPERATOR THEREFORE FALSE KA OPPOSITE I.E TRUE

if (userLoggedIn && debit && emailFormat){
    console.log("ALLOW TO BUY THE ITEM");
}

// ALL THE CONDITIONS MUST HOLD TRUE

// 2)       || [OR]

const signInWithGoogle = true
const signInWithFacebook = false
const signInWithInstagram = false

// OR OPERATOR TESTS MULTIPLE CONDITIONS , IN THE ABOVE EXAMPLE THE USER WILL SIGN IN WITH EITHER ONE OF THE PLATFORM

if(signInWithFacebook || signInWithGoogle ||signInWithInstagram){
    console.log('WELCOME USER');
}

/*
THERES ONE MORE INTERESTING OPERATOR I.E NULLISH COALESCING OPERATOR (??)
  - NULL / UNDEFINED
*/

let val1;
val1 = 55 ?? 10

console.log(val1);


let val2;
val2 = null ?? 10
console.log(val2);

var1 = undefined ?? 45
console.log(var1);

let val3
val3 = null ?? 10 ?? 15
console.log(val3);

// SO THE BASIC IDEA OF THIS OPERATOR IS WHATEVER THE VALUE IT GETS FIRST IT WILL ASIIGN THAT VALUE AND OBVIOUSLY IF IT DOESNT GET ANY VALUE IT GOES WITH NULL / UNDEFINES , ITS A LOT MORE COMPLEX AND WILL UNDERSTAND IT BETTER LATER 