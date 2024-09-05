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



let person2 = {
    name:  "Safran",
    age: 17,
    profession: "Cricketer",
    isMarried: true,
    showMessage: function () {
        console.log(this.name, "is a", this.profession);
    },
    showIfMarried: function() {
        if (this.isMarried) {
            console.log(this.name, "is Married");
        } else {
        console.log(this.name, "is unmarried");
        }
    },
    checkIfAudlt: function () {
        if (this.age > 18) {
            console.log(this.name, "is Audlt");
        }
        else {
            console.log(this.name, "is not Audlt");
            }
    }

};

person2.showMessage();
person2.showIfMarried();
person2.checkIfAudlt ();