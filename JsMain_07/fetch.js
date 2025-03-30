// fetch is used to make api request from a server for data

const { log } = require("console")

// it returns a promise \

// can be in both formats be it async await or then catch

async function getAllUsers(){
    try {
        const respose = await fetch('https://jsonplaceholder.typicode.com/users')
    // console.log(respose);
        const JSON = await respose.json() // converting the data into JSON format
        console.log(JSON);
    } catch (error) {
        console.log(error);
    }
}

getAllUsers()

// await is always used inside async fn and it pauses execution until a promise is resolved 

// it waits till the promise is resolved and then stars execution

// now we use await when the promise takes time "AS JS DONT WAIIT FOR THE PROMISE TO RESOLVE AND MOVE TO EXECUTE THE NEXT LINE , BUT WITH AWAIT WE MAKE SURE FIRST THE PROMISE IS RESOLVED THEN THE EXEUTION IS STARTED"

// now the same thing in then , catch syntax