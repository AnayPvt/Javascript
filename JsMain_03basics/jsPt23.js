
// ARROW FUNCTIONA ND "this" KEYWORD

const { log } = require("console");

const user = {
    name : "ANAY" , 
    price : 999 , 
    welcomeMessage : function(){
        console.log(`${this.name} , WELCOME TO WEBSITE`);
        console.log(this);
    }
}

user.welcomeMessage()

/*
NOW "THIS" REFERS TO CURRRENT CONTEXT OR THE CONTEXT IN WHHICH THE FUNCTION IS EXECUTED I.E TO BE ABLE TO ACCESS ALL FUNCTIONS OF THE SCOPE OF OBJECT "user"
*/

console.log();
console.log();
console.log();

user.name = "AASTHA"
user.welcomeMessage()

// IF WE SIMPLY PRINT THE "THIS" KEYWORD , IT GIVES THE CURRENT CONTEXT(I.E ANAY/MODIFIED CONTEXT (I.E AASTHA) i.e IT REFERS TO THE OBJECT "user" AND ACCESSES ITS VALUES

console.log(this); // GIVES EMPTY OBJECT BECAUSE THERE IS NO GLOBAL REFERENCE


// IN JS , WINDOW OBJECT IS THE GLOBAL OBJECT I.E ANY VAR OR NAME DECLAEED GLOBALLY BECOMES A PART OF WINDOWS OBJECT

// --------------------------------ARROW FUNCTION------------------------------------------------------

function one(){
    let username = 'ANAY'
    console.log(this.username);
}
 
one()

// HERE WE CAN SEE IT GIVES "UNDEFINES" I.E THIS WAY ONLY WORKS WITH AN OBJECT AND NOT WITH A "NORMAL" FUNCTION

console.log();
console.log();
console.log();

// ARRROW FUNCTION [ARROW FUNCTION CANNOT BE NAMED THO]

const anay = () =>{
    let surname = "Gupta"
    console.log(this.surname);
}

anay()

// ARROW FUNCTION IS SIMPLE , WE JUST REMOVE THE "FUNCTION KEYWORD AND ADD ARRO AFTER PARENTHESIS"

/* 
NOW ARROW FUNCTION CAN ALSO BE USED AS "IMPLICIT RETURN" , 
I.E I DONT HAVE TO USE {} OR RETURN KEYWORD
*/

const addTwo = (num1 , num2) => num1 + num2 

console.log(addTwo(3 , 4));

const add = (num1 , num2) => (num1 + num2) // ANOTHER WAY OF WRITING BY ADDING PARENTHESIS

/* 
ALWAYS REMEMBER WHEN YOU ARE USING {} , YOU MANDATORILY HAVE TO USE THE 'return' KEYWORD WHEREAS WHEN YOU ARE NOT USING {} , U DON'T HAVE TO
*/

/*
AND WHEN YOU USE THE "return" KEYWORD USING {} , THATS WHEN ITS CALLED 'explicitly Returned'
*/

/* 

now whats the point of having () , When you can do the same thing without it 
Well , the difference is you cant declaare object without parenthesis as seen below

*/

const addThree = () => {username : "ANAY"}
console.log(addThree());    // GIVES UNDEFINED

const addFour = () => ({username : "ANAY"})
console.log(addFour());     // PRINTS THE OBJECT
 
/*
WHATS THE POINT OF ARROW FUNCTION AND WHY DO WE USE ARROW FUNCTION?

1) CONSISE SYNTAX
2) IN NORMAL FUNCTIOON SYNTAX , THIS REFERS TO THE GLOBAL OBJECT AND NOT THE FUNCTION INSTANCE
   WHEREAS IN ARROR FN , 
3) NORMAL FUNCTION SYNTAX IS PREFERRED TO BE USED WITH CLASSES UNLIKE ARROW FUNCTION
4) ARROW FUNCTION CANNOT BE USED WITH CONSTRUCTOR , AS IT HAS ITS OWN "this" METHOD

*/

function Person(name) {    // CONSTRUCTOR FUNCTION NAMED "person"
    this.name = name;      // "this.name" ASSIGNS THE "NAME" PASSED BY THE USER AS INPUT TO THE FUNCTION
    this.sayHello = function () {
        setTimeout(function () {
            console.log(`Hello, my name is ${this.name}`);
        }, 1000);
    };
}

const john = new Person("John");
john.sayHello(); // undefined (this.name is undefined)

// using ARROW FUNCTION

function person1(name) {
    this.name = name;
    this.intro = function() {
        (() => console.log(`HEY MY NAME IS ${this.name}`))()  //() IS EXECUTION BLOCK
    }
}

const anayy = new person1("ANAY")
anayy.intro()
