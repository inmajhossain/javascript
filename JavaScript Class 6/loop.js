// Loop : i = 0 & 0 ten er theke chOto & zog hobe 1 kore tarpor consol e Print Hobe.

// for (let i = 0; i <= 10; i++){
//     console.log(i);
    
// }

// //Even Number Find out
// for (let a = 40; a <= 180; a++){
//     if (a % 2 === 0 ){
//         console.log(" Even Number", a)
//     }
// }


// //Odd Number Find out
// for (let a = 40; a <= 180; a++){
//     if (a % 2 !== 0 ){
//         console.log(" Odd Number", a)
//     }
// }


// Even and Odd Find out
for (let b = 1; b <= 100; b++){
    if (b % 2 !== 0 ){
        console.log(" Odd Number", b)
    } else{
        console.log(" Even Number", b)
    }
}

//Number List ber kora value theke

function showListOfNumber (start, end)
{
    for (let c = start; c <= end; c++)
        { if (c % 2 !== 0 )
            { console.log(" Odd Number", c) }
            else
            { console.log(" Even Number", c) }       
        console.log(c);
    }
}

showListOfNumber(10, 60)
//function call kore bole deya start & end er value koto tarpore consol e selected number theke print hobe.

//Loop for Strings

let animals = ["Bird", "Cat", "Dog", "Parrot", "Fox", "Wolf"]
for (let index = 0; index < animals.length; index++){
    console.log(animals[index]);
}


//While Loop 
let num = 10;
while (num <= 20) {
    console.log(num);
    num++;
}