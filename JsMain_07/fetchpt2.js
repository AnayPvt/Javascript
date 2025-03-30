// what we did in fetch.js , will do in then catch syntax

fetch('https://api.github.com/users/Anayy777')
.then(function(user){
    return user.json();
})
.then((data) => {
    console.log(data);
})
.catch(function(err){
    console.log(err);
})

// now YK we have a special queue similar to task queue which is called  'MICRO TASK QUEUE'
// ITA LIKE A 'VIP' LINE PRIORITIZED OVER TASK QUEUE "ONLY WHEN OPERATIONSOF BOTH QUEUE HAVE SAME TIME"

// Say if setTimeout in task queue is 2 sec and same in micro task queue , then micro task queue will be sent to call back first but if setTimeout in task queue is set o execute after 1 second, then it will execute first