// TRUTHY AND FALSY  [IMP INTERVIEW WISE]

const emailId = "h@anay.ai"

if (emailId){
    console.log('GOT USER EMAIL');
}
else{
    console.log('DONT HAVE USER EMAIL');
}

console.log();

// HERE WE DID NO SORT OF COMPARISION OR ANYTHING , STILL IT ITSELF BELIEVED THE VARIABLE WHICH HAS A STRING VALUE AS TRUE , NOW THATS "TRUTHY" ,  "h@anay.ai" here the string has some value and it has been assumed as true , what is there's an 'EMPTY STRING'?

emailId2 = ""

if (emailId2){
    console.log('GOT USER EMAIL');
}
else{
    console.log('DONT HAVE USER EMAIL');
}

// BECAUSE EMPTY STRING HAS NO VALUE , IT ITSELF CALLS IT A FALSE CASE I.E FALSY

// THERE IS A RULE/BOOK TO THE VALUES WHICH ARE TRUTHY AND FALSY

/* 

FALSY VALUES : 

false , "" , 0 , -0 , bigInt 0n , null , undefined , NaN (NOT A NUMBER)

OTHER THAN THESE VALUES ALL THE OTHER VALUES ARE "TRUTHY VALUES"

SOME TRUTHY VALUES are [] , () , "0"[0 in string is truthy] "false"[false in string is truthy],
i.e anything in string is truthy value , function(){}
even " " is truthy because we gave 'space' inside string


*/

// -----------------------------------------------------

const emptyArray = []
const emptyObject = {}

// NOW VUISUALLY IT LOOKS LIKE EMPTY ARRAY AND OBJECT BUT ITS NOT ALWAYS TRUE

// NOW HOW DO WE VERIFY WHETHER OR NOT ITS AN EMPTY ARRAY/OBJECT WHICH IS NECESSARY TO KNOW FRO  PROJECT POV

if(emptyArray.length === 0){
    console.log('array Is Empty');
}

//  AS WE KNOW IF LENGTH WILL BE 0 , THERES NO ELEMENT AND HENCE THE ARRAY IS EMPTY

if (Object.keys(emptyObject).length === 0){
    console.log('OBJECR IS EMPTY');
}

// WE KNOW "object.keys" RETURNS AN ARRAY AND AS THERES NO KEYS THE LENGTH WILL BE 0 AND HENCE IT VERIFIES THAT THE OBJECT IS EMPTY

// SOME INTERVIEW QUES

console.log(false == ''); // TRUE
console.log(false == 0); // TRUE
console.log(0 == ''); // TRUE