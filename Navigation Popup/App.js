// Header Section Start
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");
const menuOpen = document.getElementsByClassName("open");
const menuClose = document.getElementsByClassName("close");

// Menu Open Function

menuOpen[0].addEventListener("click", () => {
  console.log("running...");
  mobileMenu.style.left = "0";
  // mobileMenu.style.right = "0";
  menuOpen[0].style.display = "none";
  menuClose[0].style.display = "block";
});
// Menu Close Function
menuClose[0].addEventListener("click", () => {
  mobileMenu.style.left = "-100%";
  menuOpen[0].style.display = "block";
  menuClose[0].style.display = "none";
});
// Header Section End

// Offer Section Start

const modalBtn = document.getElementById("btn");
const modalBody = document.getElementById("modal");
const body = document.querySelector("body");
body.addEventListener("click", (event) => {
  if (event.target.classList.value === "modal") {
    modal.style.display = "none";
  }
});

modalBtn.addEventListener("click", showModal);

function showModal() {
  modalBody.style.display = "flex";
}
setTimeout(showModal, 4000);
