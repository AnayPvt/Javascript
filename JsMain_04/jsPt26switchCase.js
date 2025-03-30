// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

/*

SWITCH CASE STATEMENT IS USED OFTEN
"key is vaue we have to check again and again" which in this case is "month"
"value" i.e the value of month correspondingly , month can be 1 , 2 .... 12
"break" breaks out of the existing iteration
"default" is similar to "else" , if cases dont match , default will be executed

*/
const month = 12     // [KEY : VALUE I.E MONTH : 3]

switch(month) {
    case 1:
        console.log("JANUARY");
        break;
    case 2:
        console.log("FEB");
        break;
    case 3:
        console.log("MAR");
        break;
    case 4:
        console.log("APR");
        break;
    case 11:
        console.log("NOV");
        break;
        
    default:
        console.log(("DEC"));
        break
}

// SIMILAR TO JAVA , BY DEFAULT ONCE THE KEY(I.E MONTH) MATCHES , IT WILL JUST PRINT THE REST OF THE BLOCK WITHOUT EVEN MATCHING/VERIFYING IF IT MATCHES THE VALUE OF THE KEY


console.log();
console.log();

const weekDay = 2

switch(weekDay){
    case 1:
        console.log('MONDAY');
    case 2:
        console.log('TUESDAY');
    case 3:
        console.log('WEDNESDAY');
    case "thrus":
        console.log('THRUSDAY');
    default:
        console.log("SATURDAY");
}

// AS WE CAN SEE , "MONDAY DOESNT MATCH" BUT ONCE "TUESDAY" MATCHES IT WILL PRINT THE REST IRRESPECTIVE OF IF THEY MATCH EVEN "DEFAULT" , THATS WHY WE USE BREAK 

// WE CAN EVEN USE STRING OR ANY OTHER DATATYPE as "VALUE" BY USING THEIR FORMAT