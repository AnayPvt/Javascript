const rangers = ["red" , "blue" , 'pink' , "black"]
const you = ["joe" , "beck" , "peach"]

rangers.push(you)
console.log(rangers)  // array in a array at the end

// NOW IF I WANNA ACCESS "BECK"

console.log(rangers[4][1])

// IF YOU WANT A SINGLE ARRAY AND NOT MULTIPLE ARRAY THEN JUST "CONCAT"

let random = [1 , 2 , 3]
let random2 = [4 , 5 , 6]

console.log(random.concat(random2))


/*
THEREFORE "PUSH" METHOD WORKS ON THE EXISTING ARRAY WHEREAS CONCAT CREATES A NEW ARRAY BY MERGING
 THE TWO ARRAYS
*/

// WELL THERE'S ANOTHER METHOD WHICH IS USED SIMILAR TO CONCAT BUT "MORE INDUSTRIAL AND PROFESSIONAL"
// AND THATS "SPREAD" REPRESENTED AS ...

console.log()

let spread1 = [1 , 2 , 3]
let spread2 = [4 , 5 , 6]
let spread3 = [7 , 8 , 9]

let spreadAll = [...spread1 , ...spread2 , ...spread3]

console.log(spreadAll);


// THE BEST PART ABOUT IS WE CAN MERGE "AS MANY AS WE WANT" AND ITS A "PROFESSIONAL METHOD"

// THEN THERES ANOTHER RARE CASE METHOD WHERE YOU HAVE "ARRAYS IN ARRAYS" AND U WANT "ONE SINGLE ARRAY"
// I.E .flat() method

let flat = [1 , 2 , 3 , [ 1, 4 , 6 ] , 1, 2 , [1 , 2 , [4  , 5]]]  
console.log(flat.flat(3));

// 3 IS THE DEPTH I.E HOW MANY ARRAYS IN A ARRRAYS IN ARRAYS .... ARE THERE

// CAN JUS KEEP "Infinity" IF DONT WANNA COUNT

// SOME MORE METHODS AND FUNCTIONS


console.log(Array.isArray("ANAY")); // FALSE BECAUSE "ANAY" IS NOT ARRAY
console.log(Array.isArray([1 , 2 ,  3, 4]))  // TRUE
console.log(Array.isArray("[1 , 2 ,  3, 4]"))  // FALSE CAUSE ITS IN STRING

// TO CONVERT INTO ARRAY WE USE "from" METHOD : 

console.log(Array.from("ANAY")); 


// AND  IT SOMEHOW "CANT MAKE AN ARRAY" IT WILL RETURN "EMPTY OBJECT []"

// EXXAMPLE : 

console.log(Array.from({anay : "anay"}))  // CANT CONVERT KEY VALUE PAIRS INTO ARRAYS

// TO MAKE AN ARRAY OF MULTIPLE VARIABLES WE USE "of" METHOD

let a = 7
let b = "anay"
let c = (7 , 8 , 9)

console.log(Array.of( a ,  b , c)) 