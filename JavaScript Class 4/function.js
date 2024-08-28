console.log("Hello")


// let num1 = 20
// let num2 = 30

//Stucture

//Parameter : num1 & num1 & num3

// Default Valu : num3=0 its a default value argument add() e kono value na dile direct ekhan theke value count korbe.

//Argument : add()


function add(num1, num2, nan3=0){
    console.log("Add :", num1 + num2 + nan3)
    console.log("Substract :", num1 - num2 - nan3)
    console.log("Multiply :", num1 * num2 * nan3)
    console.log("Divided :", num1 / num2 / nan3)
}

//Function output hisebe ante hole call kore ante hoy like:-
add(40, 10, 2)


    function greetUser(name = "User", time = "Morning"){
        console.log(`Hello ${name} is true user at ${time}`)
}

greetUser("Safran", "Evening");


// Function e use kore kono kichu khuje ver kora ba search kora

// function searchWord()
// {   
//     let nature = "Hello Nature";
//     let search = "nature";
//     let searchValue = nature.toLowerCase(). search(search.toLowerCase());

//     if (searchValue !== -1) {
//         console.log(search, "Has been found")
//     } else {
//         console.log(search, "Has been not found")
//     }
// }
// searchWord();
// searchWord();


function searchWord(search = "", nature = "Hello World")
{   
    // let nature = "Hello Nature";
    // let search = "nature";
    let searchValue = nature.toLowerCase(). search(search.toLowerCase());

    if (searchValue !== -1 && search !== "") {
        console.log(search, "Has been found")
    } else {
        console.log(search, "Has been not found")
    }
}
searchWord("nature", "Bangladesh nature is beautifull");




//Task

function  email(emailAddress = "shahin@yahoo.com", checkFor = "@gmail.me" )
{
// let emailAddress = "inmaj87@Gmail.com"
// let checkFor = "@gmail.com"
let searchGmail = emailAddress.toLowerCase() .includes(checkFor.toLowerCase())

console.log(searchGmail)

if (searchGmail === true && checkFor !== "") {
    console.log("You are Logged In")
}
else
{
    console.log("You are Not Logged In")  
}
}

email("inmaj87@gmail.com", "@Gmail.com" )


