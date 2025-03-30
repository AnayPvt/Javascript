const accountId = 1445;
let accountEmail = "anay@google.com";
var accountPass = "anayGgs777";
accountCity = "Gwalior";      //can declare variable this way too but not preferred 
let accountState;

// accountId = 2              // WILL THROW ERROR AS WE CANNOT CHANGE CONSTANT
console.log(accountId) 

accountEmail = "anay777@outlook.com";
accountPass = "7676";
accountCity= "Delhi";

console.log(accountEmail);
console.log(accountCity);
console.log(accountPass);
console.log(accountState);

console.table([accountId , accountPass , accountEmail , accountCity , accountState])

/*
PREFER NOT TO USE VAR , AND ONLY TRY USING "LET"  AND "CONST"
*/
