// So how to iterate obejcts??

const myObj = {
    js : 'javacript' ,
    cpp : "c++" ,
    rb : "ruby" , 
    swift :  "swiftByapple"
}

// Theres another loop i.e 'forIn' LOOP which helps in iterating objects\

for (const key in myObj) {
    console.log(key);
    console.log(myObj[key]);
  
}

// log(key) will print alll keys
// myObj[key] will print its value

// Now what if   we use "FORIN" loop for arrays


const myArray = [ 'anay' , 'aastha' , 'rajiv']

for (const key in myArray) {
     console.log(key);
     console.log(myArray[key]);
}

// HERE WE CAN SEE IF WE USE JUST "key" IT WILL PRINT SOMETHING CALLED "ARRAYS KEYS"
// ARRAYS KEYS ARE ACTUALLY THE INDEX NO

// WHAT ABT MAPS??
console.log();


const map = new Map()
map.set('in' , 'india')
map.set('cn' , 'china')

for (const key in map) {
    console.log(key);
}

// AGAIN IT WONT PRINT ANYTHING CAUSE MAP IS NOT ITERABLE EITHER CAUSE ITS ALSO A TYPE OF OBJECT


