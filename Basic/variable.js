const userId = "12"
let userEmail = "ram@example.com"
var userPassword ="1234qab"
userCity ="KTM"
let userSata;

//userId =12  // not allowed.

/*
Prefer not the use var to declare the variable because of
issue in block scope and the function scope..
*/
userEmail = "hari@example.com"
userPassword = "87463"
userCity = "Pokhara"
let address = "ktm"

console.table([userId,userEmail, userPassword, userCity, userSata, address])