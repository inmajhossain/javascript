
// Else If Er Uses

// 90+ -> Grade A+
// 80+ -> Grade A
// 70+ -> Grade B
// 60+ -> Grade C
// 50+ -> Grade D
// below 50 Fail

const average = 90

if (average >= 90)
{console.log("Grade A+")}   

else if (average >= 80) 
{console.log("Grade A")}

else if (average >= 70) 
{console.log("Grade B")}

else if (average >= 60) 
{console.log("Grade C")}

else if (average >= 50) 
{console.log("Grade D")} 

else 
{console.log("Fail")} 

// OR -> ||
// AND -> &&


// Logical OR

// ekta true thakle always true hobe (joto false thakuk ekta true thaklei true hobe)

console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)
console.log(true || false || false || false)

// Example for OR ||
let userName = "safran"
let password = 123456
let pincode = 12345

if (userName === "safran" || password === 123456 || pincode === 1234) {
    console.log(userName, "is Logged In")
} else {
    console.log("Wrong Credentials")
}

// Example for AND &&
// ekta false thakle always false hobe (joto true thakuk ekta false thaklei flase hobe)


if (userName === "safran" && password === 123456 && pincode === 1234) {
    console.log(userName, "is Logged In")
} else {
    console.log("Wrong Credentials")
}


// False Values of JavaScript ?

// Undefined
// null
// 0
// ""
// NaN
// False

// Example
let age = 0 //or 1 or something true values
if (age){
console.log("Age is Here")
}

//Output : when i input age = 0 (like false values) it will be output nothing & when i input any values in age = 1 or something that time it will be show actual console.log outputs 



//Ternary : coditition ? true : false

let darkmode = true
darkmode ? console.log("Dark Mode is ON 😎") : console.log("Light Mode is On 😉")

let personAge = 39
personAge >= 40 ? console.log("He is Buddha 😎") : console.log("He is Young 😉")


