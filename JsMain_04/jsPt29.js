// HIGH ORDER ARRAY LOOPS

const { log } = require("console");
const { formatWithOptions } = require("util");

// FOR - OF LOOP

const array = [1 , 2 , 3 , 4 , 5]

// for (const iterator of object) {
    
// }      

// IN FOR OF LOOP ,WE GIVE THE VARIABLE NAME AFTER CONST AND TELL WHICH OBJECT TO ITERATE , IN THIS OBJECT IS A GENERAL THING TO ANYTHING U WANNA ITERATE

for (const loop of array) {
    console.log(loop);
}

// AS EASY AS THAT , "LOOP" is oour variable name similar to 'i' And array is the object we wanna iterate

const name = "ANAY GUPTA"

for (const i of name) {
    console.log(i);
}

// MAPS - 

// Map is an object which holds key value pairs

const map = new Map()

/*
In the format of "KEY : VALUE" Pairs 
similar to alias in pandas , eg pd for pandas , np for numpy
i.e we just give unique key values , we use set() to set key values and "get" to get thevalue by typing any of key even though you cant do the other way around 
*/

map.set('IN' , 'INDIA')
map.set('CN' , 'CHINA')
map.set('IN' , 'INDIA')

console.log(map.get('INDIA'));

console.log(map); // WILL GIVE OBJECT REPRESENTATION OF KEY : VALUE PAIRS

// HERE WE CAN ALSO SEE THE DUPLICATE VALUE IS IGNORED

for (const [key , value] of map) {
    console.log(key);
    console.log(value);
}

// By using [] , we are able tooo destructure the key and value pairs

const myObject = {
    game1 : "CRICKET" ,
    game2 : "Football"
}
// for (const [key , value] of myObject) {
//     console.log(key);
    
// }
// Here objet is not iterable it has its own method of iterating diiscussed in next file