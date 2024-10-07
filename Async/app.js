function changeText() {
    document.querySelector("h2").innerHTML = "Javascript is Async..";
   console.log("Changed Successfully");
}



console.log("Heading Change Started.......");
console.log("Changing......");
const timer = setTimeout(changeText, 3000);


function changeColor(){
    if(document.body.style.backgroundColor !== "red") {
        document.body.style.backgroundColor = "red";
        document.body.style.color = "white";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
}

// changeColor()

//const interval = setInterval(changeColor, 1000);


const generateUserBtn = document.getElementById("generate");
generateUserBtn.addEventListener("click", () => {
    //clearInterval(interval);
    console.log("timer Started....");
    console.log(timer);
    clearTimeout(timer);
    console.log("timer stoped");
});