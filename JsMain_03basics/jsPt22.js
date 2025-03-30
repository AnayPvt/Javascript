// SCOPE LEVEL AND MINI HOISTING

function one(){
    name = "ANAY"
    function two(){
        name1 = "AASTHA"
        console.log(name);
    }
    // console.log(name1);
    two()
}

one()   

/* 
LETS USE AN EXAMPLE , "one" IS PARENT AND "two" IS CHILD , NOW CHILD CAN TAKE ICECREAM FROM PARENT I.E CHILD CAN ACCESS THE VARIABLES OF PARENT WHEREAS PARENT CAN'T TAKE CHILD'S ICECREAM I.E PARRENT CANT ACCESS CHILD'S VARIABLE

LOGICAL EXPLANATION - FOR "two" , "name" IS A GLOBAL VARIABLE 
    WHEREAS FOR "ONE" , "name1" IS A BLOCK VARIABLE INSIDE {}

AND COMMON SENSE , THAT WE FIRST EXECUTE/CALL THE INNER FUNCTION IN THE OUTER FUNCTION AND THEN TO EXECUTE THE OUTER FUNCTION , WE CALL IT
SO WE CALL BOTH "two" AND "one"
*/


//////////////////////////// INTERESTING /////////////////////////////

function addOne(num){
    return num + 1
}

addOne(6)  // ONLY RETURNED DIDN'T PRINT

const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5));

/*
THIS IS ANOTHER WAY OF PRESENTING FUNCTION AND THIS WAY MAY BE CALLED AS "EXPRESSION" I.E THE "addTwo"
*/