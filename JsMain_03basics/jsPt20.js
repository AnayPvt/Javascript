// FUNCTIONS WITH OBJECTS AND ARRAYS


// MAKING A CART SYSTEM IN REFERENCE TO REST OPERATOR

function makeMyCart(a  , b , ...rest){
    console.log([a , b , ...rest])
}


makeMyCart(1 , 5 , 3 , 5 , 6 , 3 , 35, 9 )

// THE REST OPERATOR COLLECTS REMAINING ARGUMENTS OR PROPERTIES INTO ARRAYS OR OBJECS OR FUNCTION PARAMETERS



// NOW HOW DO WE PASS OBJECT IN FUNCTION : 

user = {
    name : "ANAY" , 
    college : "ARSD"
}

function handleUser(anyObject){
    return `USERNAME IS ${anyObject.name} and college is ${anyObject.college}`
}

console.log(handleUser(user));

// PASS THE "OBJEC AS ARGUMENT"

// WE CAN ALSO PASS OBJET DIRECLY
console.log();

console.log(handleUser({
    name : "XYZ" , 
    college : "XYZ"
}))

// SAME WAY WE CAN EVEN PASS ARRAYS
console.log();

arrayName = ["anay" , "ayanabh" , "nischay"]
arrayAge = [18 , 19 , 17]

function arrays(array1 , array2 , array3){
    return `THE GROUP'S AGE IS ${array1} AND THEY ARE ${array2} and ${array3[1]} IS THE ELDEST`

}

console.log(arrays(arrayAge , arrayName , arrayName));


// SIMILARLY PASSING ARRAY IN ARGUMENTS


