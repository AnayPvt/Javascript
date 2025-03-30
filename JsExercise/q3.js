// Function `printEven()` prints all the even numbers of a 2D array using for loops and ‘%’ operator.

function printEven(arr){
    for(i = 0 ; i < arr.length ; i++){
       if (arr[i] % 2 == 0){
        console.log(arr[i]);
       } 
    }
}

printEven([12 , 24 , 11 , 12 , 33  , 55 , 57])

