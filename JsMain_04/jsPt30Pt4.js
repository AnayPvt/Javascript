// REDUCE METHOD

// BUT BEFORE THAT LETS SEE IF WE CAN APPLY FILTER METHOD WORKING USING MAP METHOD

myNums = [1 ,2 ,3 ,  4, 5, 6, 7 ,8]

const anay = myNums.map((num) => num > 4)
console.log(anay);

// AS WE CAN SEE , IT DOESNT FILTER INFACT IT CHECKS THE CONDITION AND GIVES THE ANSWER IN TRUUE OR FALSE

// STARTING WITH REDUCE METHOD

/*
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);


Callback function similar to map and filter
Here initial value is 0 
Accumalator in the first iteration takes 0
current value is the array value being iterated 
the sum of acc + currentval goes to upcoming iteration of accumulator
It only asks initial value for the first iteration which goes into the accumulator 
*/
console.log();
console.log();

nums = [1 , 5 , 9 , 5]
initialVal = 0

const reduce = nums.reduce((acc , currentval) => acc + currentval , initialVal)
console.log(reduce);

// WE CAN DECLARE INITIAL VALUE IN THE METHOD ITSELF TOO


const reduce1 = nums.reduce((acc , currentval) => acc + currentval , 0)
console.log(reduce1)

// More descriptive
console.log();

const reduce3 = nums.reduce((acc , currentval) => {
    console.log(`ACC ${acc} & CurrentVal ${currentval}`);
    return acc + currentval} , 0)

    
console.log(reduce3);

// TRY THE SAME IN FOR LOOP

let acc = 0
nums = [1 , 4 , 3, 4 ,5]

for(i = 0 ; i < nums.length ; i++){
    acc += nums[i];
}

console.log(acc);

const shoppingCart = [
    {
        iteName : "BALL" ,
        price : 40
    } , 
    {
        iteName : "BAT" , 
        price : 80 
    } , 
    {
        iteName : "GLOVES" ,
        price : 50
    }
]

const total = shoppingCart.reduce((acc , currentValue) => acc + currentValue.price , 0)
console.log(total);