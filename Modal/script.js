"use strict";

let card = document.getElementById("card-section");
let modals = document.querySelectorAll(".modal");
let hiddenCard = document.querySelector(".hidden");
console.log(modals);

//add a click event to the modal buttons
for (let i = 0; i < modals.length; i++) {
  modals[i].addEventListener("click", function () {
    alert("Still working on the functionality");
    console.log(`This is Modal ${i + 1}`);
  });
}
