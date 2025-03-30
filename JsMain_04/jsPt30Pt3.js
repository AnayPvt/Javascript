// MAP METHOD

myNums = [1 , 2 , 3, 4 ,5 ,6 ,7 ,8 ,9 , 10]

// In this too we give call back fn , now imagine we wanna add 10 to each number

const add = myNums.map((num) => num + 10)
console.log(add);

const add2 = []
myNums.forEach((num) => add2.push(num + 10))


console.log(add2);

// Chaining (i.e nesting methods)

const nestedNums = myNums.map((num) => num + 10).map((num) => num + 1).filter((num) => num >= 15)
console.log(nestedNums);


















