// Function printPattern() is used to print a pattern for a given range using nested for loop.

function printPattern(n){
    for(i = 0 ; i <= n ; i++){
        var str = "";
        for(j = 0 ; j <= i ; j++){
            str += j = " ";
        }
    }
    console.log(str);
}

printPattern(8)