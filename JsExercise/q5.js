// Function numPower() to returns power of number for provided exponential value using for loop.

function numPower(num , power){
    var res = 1
    for(i = 0 ; i < power ; i++){
        res *= num
    }
    return res
}

console.log(numPower(2 , 6))