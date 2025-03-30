// OBJECTS PT2

const { log } = require("console");

// BEFORE TALKING ABOUT DECLARING OBJ WIITH CONSTRUCTOR LETS TALK A BIT MORE ABT "LITERALS"


const user = {}
user.name = "ANAY"
user.city = "DELHI"
user.loggedIn = true

console.log(user);  // WE CAN GIVE KEY:VALUE THIS WAY TOO AND IT WOUD WORK  

// THEN WE CAN ALSO USE NESTED OBJECTS I.E OBJECT INSIDE OBJECT

const user1 = {
    address : "delhi" , 
    fullName : {
        firstName : {
            formalFirstName : "ANAY" ,
            petFirstName : "SIBU"
        } ,
        lastName : "GUPTA"
    }
}

console.log(user1)
console.log()
console.log(user1.fullName);
console.log()
console.log(user1.fullName.firstName.formalFirstName);
console.log(user1.fullName.lastName);
console.log()

// NOW TO MERGE TWO OBJECTS

const obj1 = {1: "a" , 2 : "b"}
const obj2 = {3: "a" , 4 : "b"}

const obj3 = Object.assign({} , obj1 , obj2)
console.log(obj3);

/*
TO MERGE OBJECTS WE USE "ASSIGN" FUNCTION AND GIVE A "CURLY BRACKS" IN THE START ACC TO DOCUMENTATION 
BECAUSE IT IS THE "TARGET" IN WHICH THE MERGED/COPIED VALUES WILL RETURN AND THE OTHERS ARE "SOURCE"
*/

// OR JUST USE THE "SPREAD" OPERATOR MAN

const obj4 = {...obj1 , ...obj2}
console.log(obj4);

// ARRAY OF OBJECTS

/*
CONSIDER THERE ARE MULTIPLE USERS AND YOU WANT TO KEEP THIER DATA SEPERATED AND NOT IN A SINGLE "OBJECT"
IN THAT CASE WE USE "ARRAY OF OBJECTS"
*/
console.log();
console.log();

const users = [
    {
        user1 : "ANAY" , 
        jobStatus : "UNEMPLOYED" , 
        looking : false

    } , 
    {
        user2 : "AASTHA" , 
        jobStatus : "EMPLOYED" , 
        looking : false

    } ,
    {
        user3 : "XYZ" , 
        jobStatus : "UNEMPLOYED" , 
        looking : false

    }
]
// NOW ACCESS LIKE AN ARRAY USING INDEXING

console.log(users[1].jobStatus);
console.log(users[2]);
console.log(users[0].looking);

// WE AN ALSO GET KEYS AND VALUES SEPERATELY

console.log(Object.keys(users[0]))
console.log(Object.values(users[0]))

/* 
AND THE IMPORTANT FAT IS , THE DATATYPE RETURNED IS 'ARRAY' THEREFORE WE CAN PERFORM LOOP OPERAATIONS , 
CONDITIONAL STATEMENTS AND MANY MORE
*/
console.log();
console.log(Object.entries(users[0])); // KEY AND VALUE IN MULTI-DIMENSIONAL ARRAY

// WE CAN EVEN ASK IT IF IT HAS CERTAIN VALUES (IN BOLEAN)

console.log(user.hasOwnProperty('name'))  
console.log(user.hasOwnProperty('nameIs'))  
37


console.log("------------------------------------------------------------------------------------------")
// -----------------------------------------------------------------------------------------------------

// OBJECTS WITH SINGLETON I.E DECLARE USING CONSTRUCTOR
// CONSTRUCTOR IS A SPECIAL METHOD FOR DEFINING PROPERTIES AND METHODS OF AN OBJECT

// FUNCTIONS IN JAVASCRIPT ARE SIMILAR TO 'METHODS' IN JAVA

// LETS MAKE A "PHONE" FUNCTION

function Phone(camera , processor , hertz){
    
// NOW WE ASSIGN THE PROPERTIES USING "THIS" KEYWORD
    this.camera = camera
    this.processor = processor 
    this.hertz = hertz
    this.performance = function(){console.log(`THE PERFORMANCE OF ${this.processor} IS DECENT` )}

    // HOW ABOUT A FUNCTION INSIDE A FUNCTION I.E "NESTED FUNCTION"/METHOD

}

const carOne =  new Phone("64 Mp" , "HELIO G65" , "60hz")  // THEREFORE DECLARING VAR USING CONSTRUCTOR


console.log(carOne.camera)
console.log(carOne.hertz)
console.log(carOne.processor)

// THE BESTT PART IS THE "CONSTRUCTOR METHOD" IS "REUSABLE" WHEREAS THE LITERAL METHOD WOULD SUCKK TIME
console.log()

const phoneTwo = new Phone("108 Mp" , "Snapdragon 725" , "90hz")

console.log(phoneTwo.camera)
console.log(phoneTwo.hertz)
console.log(phoneTwo.processor)

// NOW LETS TRY CALLING THE METHOD/NESTED FUNCTION

phoneTwo.performance() // MAKE SURE TO CALL USING PARENTHESIS () CAUSE ITS A FN/METHOD

// AND THATS GREAT IT WORKS