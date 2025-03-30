// WHILE AND DO WHILE LOOP

i = 0

while (i <= 5) {
    console.log(i);
    i++;
}

/* 
IN WHILE WE ONLY CHECK CONDTION INSIDE IT , 
WE INITIATE IT BEFORE CALLING THE LOOP
AND WE INCREMENT IT AFTER TELLING IT WHAT TO DO

ITS KINDA MORE ORDERED

USED WHEN YOU DONT KNOW THE NUMBER OF ITERATIONS TO BE PERFORMED

*/

// TABLE OF 2 
// console.log();
// j = 0

// while (j <= 20) {
//     console.log(j);
//     j = j +4 2
    
// }

// DO WHILE , SPECCIAL THING IS "PHELE KAAM HOGA" I.E "DO" PHELE THEN CONDITION CHECKC HOGI I.E "WHILE"
// FIRST WE INITIATE A GLOBAL VARIABLE , THEN "DO" I.e increment and whatever u wanna do and then condition

let score = 1

do {
    console.log("SCORE IS : " , score);
    score++;
} while (score<= 5);

let print = 0
a = 0

do {
    console.log("2 * " , a, "=" , print );
    print = print + 2
    a++

}while(print <= 20)
   