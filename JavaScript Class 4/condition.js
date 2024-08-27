// Round Number or Integer Number

const carModel = 2024
console.log(carModel)
console.log(typeof carModel)

// Decimal Number (Math er sese . er por koto digit dekhabo seta)

let decimalNumber = 100.51545778
let sum = decimalNumber + 400
console.log(sum.toFixed(2))

// Round Number : Point jotoi thakuk round number hobe .5 er upore hole 1 barbe.

let roundNum = Math.round(decimalNumber)
console.log(roundNum)



let value = 99.49563685245
let netValue = value + 50
let showValue = Math.round(netValue)
console.log("Round Number :", showValue)

// Math Ceil Number

// Total Valuer por jodi point 1 o besi hoy tahole 1 bere jabe.

let Bangla = Math.ceil(77.01)
console.log(Bangla)

// / Math Floor Number

// Total Valuer por jodi point 99 o besi hoy taholeo .99 count hobe na.

let Headphone = Math.floor(94.99)
console.log(Headphone)

// / Math abs Number

// Negetive Value asle ta positive value hoye jabe..

let price =  Math.round(Math.abs(-120.53))
console.log(price)

// ParseInt & ParseFloat 

let abcPrice = 400
let vat = (abcPrice/100*7.723)
let newVat = vat.toFixed(2) 
// let total = abcPrice + parseInt(newVat) 
let total = abcPrice + parseFloat(newVat) 
//Decimal ba point ante hole parseFloat use korte hobe
console.log(total)


// Random Math 0-1 er modde thakbe

const random = Math.floor(Math.random() * 6 +1 )
console.log(random)


// Genarate 4 Digit OTP

const otp = Math.floor(Math.random() * 900 + 1000 )
console.log("OTP :", otp)


// minmum and maximum number ber kor
const min = Math.min(2, 3, 5, 7, 15, 56)
console.log(min)

const max = Math.max(2, 3, 5, 7, 15, 56)
console.log(max)

// Checking of integer

let newValue = "123" //String if wright without inverted coma its show true
console.log(Number.isInteger(newValue))
