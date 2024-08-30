const car = {
    name: "BMW",
    model: 2014,
    Weight: "700kg",
    color: "Red",
    isNew: false,
}
console.log(typeof car)
console.log(car.name, car.model, car.isNew)

let person = {
    name: "Safran",
    age: 24,
    isMarried: false,
    isGraduate: true,
}
console.log("Age :", person.age)
console.log("Name :", person.name)


//Modife or Add or Delete korte pari ei vave
person.name = "Sanan"
console.log(person.name)
person.address = "Mirpur"
console.log(person)


// For Deleting
delete person.address
console.log(person)
delete car.color
console.log(car)

