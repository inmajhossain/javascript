
const fruits = ["Apple", "Banana", "Mango", "Orange", "lithi"]
console.log(fruits)
length.fruits

const seasonFruits = fruits.concat("Goava")
console.log(seasonFruits)

// Ses theke item delete korte chaile (pop) use korte hobe
fruits.pop(4)
console.log(fruits)

// Ses theke item add korte chaile (push) use korte hobe
fruits.push("Water Malon")
console.log(fruits)

// Suru theke item delete korte chaile (shift) use korte hobe
fruits.shift("0")
console.log(fruits)

// Suru theke item add korte chaile (unshift) use korte hobe
fruits.unshift("Strawberry")
console.log(fruits)


// Slice or kete fela
let animal = ["Cow", "Goat", "Tiger", "Lion", "Cat"]
console.log(animal)

// Slice diye korle jei number gulo deya hobe sei number thek end number porjonto consol e shw korbe
// let slice = animal.slice(1, 3)
// console.log(slice)

// Splice diye korle jei number gulo deya hobe sei number thek end number porjonto consol e show korbe and number er sese notun gulo add kora jabe and O dile first number e jeta delete kora hoyeche sekhane new gulo add hobe

let splice = animal.splice(1, 0, "Dear", "Pigeon")
console.log(splice)
console.log(animal)


// Sortout A-Z
console.log(animal.sort())

// Sortout Z-A
console.log(animal.reverse())





