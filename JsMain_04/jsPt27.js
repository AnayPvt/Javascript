// LOOPS    

// 1ST - FOR LOOP

// SYNTAX

arrays = [4 , 67 , 7 , 10]

for (let i = 0 ; i < arrays.length ; i++){
    const element = arrays[i];
    console.log(element);
}

// console.log(element); // WILL THROW ERROR CAUSE ELEMENT IS DEFINED UNDER LOCAL SCOPE AND NOT A GLOBAL SCOPE
console.log();

for (i = 0 ; i <=10 ; i++){
    const element = i
    if (i == 5){
        console.log('5 is the best number');
    }
    console.log(element);
}

for (i = 0 ; i <= 5 ; i++){
    console.log("OUTER LOOP : " , i);
    for (j = 0 ; j <= 10 ; j++){
        console.log("TABLE OF : " , i , "*" , j , "=" , i*j );
    }
}


// BREAK AND CONTINUE

for (i = 0 ; i<= 5 ; i++){
    console.log(i);
    if(i == 2){
        break
    }
}

// BREAK I.E BREAKING OUT OF THE LOOP/ ITERATION ONCE A CERTAIN CONDITIION IS MATCHED

console.log();

for (i = 0 ; i<= 5 ; i++){
   
    
    if(i == 2){
        console.log("2 is DETECTED")
        continue
    } 
    console.log(i);
}

// CONTINUE SAYS "EK BAAR MAAF KARDOO" LMAO , I.E IGNORNING AND ITERATION AND CONTINUING THE REST I.E IT WILL DO A PARTICULAR STEP AT THAT PARTICULAR ITERATION AND CONTINUE EVEN THO ORDER MATTERS