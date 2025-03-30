// DESTRUCTURING OF OBJECTS

const courseName = {
    name : "COHORT3" ,
    isPaid : true , 
    amt : 4800 , 
    teacher : "HARKIRAT"

}

//  NOW TO DESTRUCCTURE/EXTRACT OBJECT PROPERTY FROM OBJECT

const{teacher} = courseName 
// EXTRACTING "TEACHER" PROPERTY FROM "CourceName" OBJECT AND DIRECTLY ASSIGNING IT TO VARIABLE "TEACHER" 
console.log(teacher)       // HARKIRAT

// IF I FEEL LIKE "TEACHER" IS BIG TO WRITE I CAN CHANGE IT

const{teacher : a} = courseName  //Renaming the Destructured Variable
console.log(a);   

// THE RENAMING PART IS USEFUL WHEN THE "VARIABLE NAME" IS MEANINGLESS OR TOO LONG  

// WHENEVER YOU SEE A CURLY BRACES SYNTAX ,ITS "DE-STRUCTURING"

const array = [
    {
        anay : "name"
    } , 
    {
        class : "NaN"
    } 
]

const {anay} = array[0]
console.log(anay);

// THE ABOOVE EXAMPLE SHOWS HOW WE DECONSTRUCT ARRAY OF OBJECTS

// ----------------------------------------------------------------------------------------------------

/*
NOW LETS TALK ABOUT API'S I.E "APPLICATION PROGRAMMING INTERFACE"
IN SIMPLE WORDS , APNA KAAM KISI AUR KE UPAR DAAL DENA

"When working with APIs, we often receive data (usually in "JSON" format) from the backend, and we need to process or manipulate it in the frontend."
*/

/* NOW HOW DOES THE "JSON"(I.E JAVASCRIPT OBJECT NOTATION

) FORMAT LOOK LIKE" : 

SIMILAR TO OBJECT BUT EVEN KEYS ARE IN "STRING" DATATYPE ALONG WITH "VALUES"

{
"name" : "anay" , 
"class" : "Nan" , 
"college year" : "1st"
}
*/

//ONE OF THE MOST COMMON METHOD  IS THE "FETCH METHOD"

