// Function `deleteElement()` deletes all the occurrence of element from the given array.

function deleteElement(arr , del){
    for(i = 0 ; i < arr.length ; i++){
        if (arr[i] === del){
            arr.splice(i , 2)   // i is the index where to modify and 1 is the number of elements to delete
        }
    }
    return arr
}

var arr1  = [1 ,2 , 5 , 7 , 3 , 4 ,5 , 3]

console.log(deleteElement(arr1 , 3));