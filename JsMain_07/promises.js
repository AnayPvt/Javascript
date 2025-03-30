/**

*
Promises is an "OBJECT" , 
It is an eventual completion or failure of an async operation


A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.

Promises also take callback fn broken into 2 parts -

resolve - i.e promise pura hoga i.e call this when task is successful
reject - i.e promise pura nahi hoga i.e call this when task failed

then we do a async operation inside the promise

and while we create promise its not necesaru to store it in a variable

 * 
 */

const promiseOne = new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log(('Async TASK DONE!'));
        resolve()
    } , 1000)
   
})



promiseOne.then(function(){
    console.log("promise cosumed");
})  // resolve and then are connected but make sure to calll resolve()

// then provides callback fn too and its callback fn has an automatic argument which returns whatever the promise executes 


// and while we create promise its not necesaru to store it in a variable


console.log();

new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log('async pt2');
        resolve()
    } , 1000)
    
}).then(function(){
    console.log('async 2 revolved');
})

// we can also yk fetch data from resolve by passing it in the parameter itself and then using the "then" method as it executes or the promises which are resolved and recieve the value inside their parameter

const promiseThree = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({username : 'ANAY' , email : 'anaygreat@gmai.com'})
    } , 1000)

}).then(function(user){
  console.log(user);  
})

// user is some parameter inside the callback fn which recieves the resolved values

const promiseFour = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = false // here it means there is an error , later I changed to false for the code to work
        if(!error){
            resolve({username : 'ANAY' , email : 'anaygreat@gmai.com'})
        }
        else{
            console.log('THERE IS AN ERROR');
        }
        
    } , 1000)
}).then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(err){
    console.log(err);
}).finally(() => {
    console.log('Finally the promise is either resolved or rejected');
})

// we can use .then as many times as we want

// while then receives value when resolved is called , similarly "CATCH" fn is used to handle errors (rejections) in a promise

// catch also have a callback fn and a parameter which is generally named "ERROR" will print the value inside reject which is "THERE IS AN ERROR"

// finally is like something took place be it resolve or reject , it is always executed after either of the resolve or reject is settled , it runs no matter what be it success or failure
const promiseFive = new Promise(function(resolve , reject){
    setTimeout(function(){
       let error = true
       if(!error){
        resolve({username : 'js' , password : '123'})
       }
       else{
        reject('ERROR! s aomething went wrong')
       }
    } , 1000)})

// Now lets understand 'ASYNC AWAIT' , its same as then and catch just different 

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
        
    } catch (error) {
        console.log(error);
    }
}

// as async await dont provide error handling , we will use try catch to avoid it from crashing as it handles errors in jjs , the catch is same as the  catch

// "await promiseFive"

// also its a object so we must call it but we could avoid it in then 

consumePromiseFive()


// both syntax are great use any