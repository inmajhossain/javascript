let name2 = "Sanan"
console.log(name2)

if (true) {
    console.log(name2.concat(" is beautifull"))
}
else 
{
    console.log("Content Not Found")
}

let number = 10
console.log(number >= 10)

if (number >= 10) {
    console.log("Number is gretter then 10")
}

let isAdmin =false
if (isAdmin == true) {
    console.log("Admin is Logged in")
}
else
{
    console.log("Admin is not Logged in") 
}

// sentache index ber cora
// all ok thakle print hobe and true asbe na hole -1 and false asbe.

let nature = "Hello i am inmaj from Dhaka"
// from dile true asbe r From dile false asbe
let search = "fRoM"
let searchValue = nature.toLowerCase() .search(search.toLowerCase())
console.log(searchValue)

let searchValue2 = nature.includes(search.toLowerCase())
console.log(searchValue2)


if (searchValue == -1) 
    {
        console.log(search.toLowerCase(), "Not Found!")
}
else
{
    console.log(search, "has been found")   
}

let emailAddress = "inmaj87@Gmail.com"
let checkFor = "@gmail.com"
let searchGmail = emailAddress.toLowerCase() .includes(checkFor.toLowerCase())

console.log(searchGmail)

if (searchGmail === true) {
    console.log("You are Logged In")
}
else
{
    console.log("You are Not Logged In")  
}
