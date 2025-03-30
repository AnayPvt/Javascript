// "FOREACH" loop {very useful in arrays}

const coding = ['js' , 'ruby' , 'swift' , 'java' , 'ts' , 'python']

coding.forEach((item) => {
    console.log(item);
    
});

// THIS LOOP IS DIRECTLY ADDED IN PROPERTY OF ARRAY

// So its syntax goes by "foreach" being a fn of the array
// i.e arrayname.foreach('callbackfn'[i.e demands a function])
// callback fn dont have a name

// here 'Item' is the argument which goes through each index of the array

// we can also give reference of a whole different function eg
console.log();


function printme(item){
    console.log(item);
}

coding.forEach(printme)


console.log();
console.log();
console.log();

coding.forEach((item , index , array) => {
    console.log( item , index , array);
})

// foreach not just have acess to array values , the second arg can be "array index" and 3rd can be 


// USING FOREACH IN ARRAY OF OBJECT
console.log();
console.log();

name =  [
    {
        name : "ANAY" , 
    } ,
    {
        name : "Anirudh"
    } ,
    {
        name : "ayanabh"
    }
]

name.forEach((element , index , array) => {
    console.log(element);
    console.log(element.name);
   
});

// Being able to get a value from a object which itself is inside an array is a huge thing


