
// FILTER , MAP AND REDUCE  [TIME STAMP : 4:19]

// UNLIKE FOREACH , Filter function returns values

let coding = ['js' , 'swift' , 'angular'] 


coding.forEach(element => {
    console.log(element);
});

// FILTER    [SIMILAR TO FOREACH BBUT IT RETURNS VALUE128]

let myNums = [1 , 2 , 5 , 3 , 5 , 56 , 575 ,75 , 76]

console.log(myNums.filter((num) => num > 5));
console.log(myNums.filter((num) => {
    return num > 5
}));


const newArr = []

myNums.forEach((num) => {
    if (num > 5) {
        newArr.push(num)
    }
})

console.log(newArr);

const books = [

    { title: 'Book One', genre: 'Fiction', publish: 1981,
      edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992,
      edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999,
      edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989,
      edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009,
      edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987,
      edition: 2010 },
    
    { title: 'Book Seven', genre: 'History', publish: 1986,}

    ]
    
 //THIS IS HOW WE GET DATABASE , NOW WE HAVE TO APPLY FILTERS ACC TO USER DEMANDS

// To check multiple conditions again we cn use and operator

console.log();

const userMul = books.filter((bk) => {return bk.genre === 'History' && bk.publish >= 1990})

console.log(userMul);