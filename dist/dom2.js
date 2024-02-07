"use strict";
const forms = document.querySelector(".details");
const userName = document.querySelector("#userName");
const userEmail = document.querySelector("#userEmail");
forms.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(userName.value, userEmail.value);
});
