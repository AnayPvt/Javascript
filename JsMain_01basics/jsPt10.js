// STACK AND HEAP MEMORY ( REFER TO ONENOTE FOR DIAGRAM AND STUFF)


/*
STACK MEMORY :

- STORES PRIMITIVE DATATYPES
- GET A "COPY" OF DECLARED VARIABLE & CHANGES ARE MADE IN A COPY

HEAP MEMORY :

- STORES NON PRIMITIVE DATA TYPE
- GETS A REFERENCE OF ORIGINAL VALUE & CHANGES ARE MADE IN THE ORIGINAL
*/

// EXAMPLE

let Student = "123"               // WILL BE STORED IN STACK CAUSE ITS PRIMITIVE TYPE
let anotherStudent = Student

// HERE ANOTHER STUDENT WILL TAKE THE VALUE OF STUDENT

console.log(anotherStudent)  //prints "123"

// NOW LETS SAY WE WANT TO CHANGE THE VALUE

anotherStudent = "1234"

/*
NOW WE KNOW THE VALUE OF "anotherStudent" WILL BE CHANGED BUT WILL THE VALUE OF "Student" be changed too?

THE ANSWER IS "NO" AS ITS STORED IN "STACK MEMORY" AND IT GIVES US A COPY OF THE VARIABLE WHERE 
   CHANGES ARE MADE AND NOT THE ORIGINAL
*/

console.log(Student)       //  REMAINS THE ORIGINAL VALUE
console.log(anotherStudent)

let userOne = {
    email : 'anay@outlook.com' ,
    upi : 'anay@ybl'
}

let userTwo = userOne

userTwo.email = 'aaastha@otlook.com'

console.log()

console.log(userOne.email)
console.log(userTwo.email)

/* IN THIS CASE WE DONT GET A COPY BUT THE "ORIGINAL REFERENCE" , THEREFORE CHANGES MADE IN USERTWO
WILL REFLECT IN "USERONE"
*/

// THIS IS "MAJOR BRIEFING" OF HEAP AND STACK