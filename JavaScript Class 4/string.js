// // variable
// 1. variable
// 2. let
// 3. const

// Using var

// var name, job, age, title;

// job = "Marketing;
// var job = "marketing"
// console.log(job);

// Using let

// person = "nadim";
// let age, job, title;

// job = "programmer"
// job = "Backend" 
// // backend working because of last assing value is show always 
// title = "Development"

// let person = "Zohan"

// console.log(person, job, title)

// For Var Scope

// var carModel = 2024
// {
//     var carModel = 2030
//     console.log(carModel)
// }
// console.log(carModel)

// For let Scope

// let carModel = 2040
// {
//     let carModel = 2050
//     console.log(carModel)
// }
// console.log(carModel)

// Dynamic Value

let countryName = "Bangladesh"
let city = "Dhaka"
let sentance =  `${city} is capital of ${countryName}`
console.log(sentance)

// Bollean
let heMarried = true;
// const heMarried = false;
console.log(typeof heMarried);

// Undefider

let car
console.log(car)

// null
let sanan = null
console.log(typeof sanan)

// NaN Not a Number
let counter = 35
console.log(counter * "Hi")




// Functionality


console.log(40**3)
// Example : 40 * 40 * 40

// Modulas

console.log(10 % 3)
// Example : Vagses Bosbe

// Increment & Decrement ++ hole 1 add hobe -- hole 1 Minus hobe

let salary = 500;
salary++;
salary++;
salary++;
salary++;
salary++;
salary--;
salary--;
console.log(salary)

// += function
// number er value ke + sign hole eksathe 2 bar jog kora or * sign hole gun kora

let number = 50
number += number
console.log(number)


// == sign is true/false checker

let zohan = "married"
console.log(zohan == "unmarried")
console.log(zohan != "unmarried")
// not equal sign is !=
console.log(zohan == "married")


// === sign is strictly true/false checker

let mark = "20"
console.log(mark === 20)

/* < and > */

console.log(20 < 10)
console.log(20 > 10)
console.log(20 <= 20)





const navToggle = document.getElementById('nav-toggle');
const mobileNav = document.getElementById('mobile-nav');

navToggle.addEventListener('click', () => {
  mobileNav.classList.toggle('hidden');
});


// Slider

const slider = document.querySelector('.slider');
const sliderInner = slider.querySelector('.slider-inner');
const sliderItems = sliderInner.querySelectorAll('.slider-item');
const sliderPrev = slider.querySelector('.slider-prev');
const sliderNext = slider.querySelector('.slider-next');
const sliderDots = slider.querySelector('.slider-dots');
const sliderDotButtons = sliderDots.querySelectorAll('.slider-dot');

let currentSlide = 0;

sliderPrev.addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = sliderItems.length - 1;
  }
  updateSlider();
});

sliderNext.addEventListener('click', () => {
  currentSlide++;
  if (currentSlide >= sliderItems.length) {
    currentSlide = 0;
  }
  updateSlider();
});

sliderDotButtons.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    updateSlider();
  });
});

function updateSlider() {
  sliderInner.style.transform = `translateX(${currentSlide * -100}%)`;
  sliderDotButtons.forEach((dot, index) => {
    dot.classList.remove('active');
    if (index === currentSlide) {
      dot.classList.add('active');
    }
  });
}

// Initialize slider
updateSlider();



// swiper


// const swiper = new Swiper('.swiper-container', {
//     slidesPerView: 1,
//     spaceBetween: 30,
//     loop: true,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   });


  let number2 = 50
  number2 += number2
  console.log(number2)

// concat holo zog korar moto or join 2 or more sentance

//   let greeting = " is 10 years old"
//   let user = prompt("Enter Your Name")
//   let output = user.trim() .concat(greeting)
//   console.log(output)

// // Trim korle first and last er space gulo chole jay 
//   let sentence2 = "     Bangladesh is beautifull country." 
//   console.log(sentence2.trim())

// promt ba alart dile browser e pop up window asbe 

  // let user = prompt("Enter Your Name")
  // console.log(user.trim())

  // let notification = alert("You Windows Is Not Active")
  // // or
  // alert("You Windows Is Active")


  // backtic diye dynamik kore full sentence lekha jay

//   let language = "javascript"
//   let username = "Ahmed"
//   let year = 1993
//   let output2 = (`${language} is most popular language from ${year} and it say by ${username}`)
//   console.log(output2)

// // length diye ekta sentence koyta alphabet thake ta ber kora jay

//   let robi = "He is not good"
//   console.log(robi.length)

//   // indexof diye ke koto number alphabet ta ber kora jay 

//   console.log(robi.indexOf("n"))

//   // charAt diye number diye ber kora kay kon number e kon alphabet

//   console.log(robi.charAt(6))
//   console.log(robi.charAt(7))

// // includes diye sentence er modde asolei word ta ache kina seta true or false diye bole dibe.
//   let include = robi.includes("good")
//   console.log(include)

//   // jodi kono somoy consol e -1 ase tahole dorte hobe seta pawaa jay ni
// // search diye word er index ber kora jay

// let search = robi.search("good")
// console.log(search)



// // all word uppercase and lowercase korar jonno 

// let upper =robi.toUpperCase()
// console.log(upper)

// let lower =robi.toLowerCase()
// console.log(lower)
// substring diye vag kore specefic vabe index number diye word ke consol e bosano jay
let quote = "life is too short" 
let substring = quote.substring(5, 11)
console.log(substring)


let lorem = "lsubstring diye vag kore specefic vabe index number diye word ke consol e bosano jay"
console.log(lorem.substring(11, 19) + "......Read More")


let sliceTex = lorem.slice(0, 25)
console.log(sliceTex + "......Read More")

let sliceTex2 = lorem.slice(-10, -1 )
console.log(sliceTex2)




