// This code was written by SarahRDH


const hamburgerMenuIcon = document.querySelector("#hamburger-menu");
const sideNav = document.querySelector(".side-nav");
const darkOverlay = document.querySelector(".overlay");
const close = document.querySelector(".closebtn");

function handleMenuClick() {
  sideNav.style.width = "250px";
  darkOverlay.style.display = "block";
}

function handleSideNavClose() {
  sideNav.style.width = "0px";
  darkOverlay.style.display = "none";
}

hamburgerMenuIcon.addEventListener("click", handleMenuClick);
close.addEventListener("click", handleSideNavClose);


const signUp = document.querySelectorAll(".sign-up-link");
const form = document.querySelector(".form-container");
const closeSignUp = document.querySelector(".form-container .closebtn");

function handleSignUpClick() {
  form.style.display = "block";
  darkOverlay.style.display = "block";
}

signUp[0].addEventListener("click", handleSignUpClick);
signUp[1].addEventListener("click", handleSignUpClick);

function handleSignUpClose() {
  form.style.display = "none";
  darkOverlay.style.display = "none";
}

closeSignUp.addEventListener("click", handleSignUpClose);
