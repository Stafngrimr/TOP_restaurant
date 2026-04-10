// src/index.js

import "./styles.css";
import { addHome, greeting } from "./home.js";
import { addMenu } from "./menu.js";
import { addContact } from "./contact.js";

const homeButton = document.querySelector("button#home");
const menuButton = document.querySelector("button#menu");
const contactButton = document.querySelector("button#contact");
const content = document.querySelector("#content");

const load = (function() {
    addHome();
})();


homeButton.addEventListener("click", function() {
    homeButton.style.color = "red";
    homeButton.style.borderColor = "red";
    menuButton.style.color = "white";
    menuButton.style.borderColor = "white";
    contactButton.style.color = "white";
    contactButton.style.borderColor = "white";
    content.textContent = "";

    addHome();
});

menuButton.addEventListener("click", function() {
    homeButton.style.color = "white";
    homeButton.style.borderColor = "white";
    menuButton.style.color = "red";
    menuButton.style.borderColor = "red";
    contactButton.style.color = "white";
    contactButton.style.borderColor = "white";
    content.textContent = "";
    addMenu();
});

contactButton.addEventListener("click", function() {
    homeButton.style.color = "white";
    homeButton.style.borderColor = "white";
    menuButton.style.color = "white";
    menuButton.style.borderColor = "white";
    contactButton.style.color = "red";
    contactButton.style.borderColor = "red";
    content.textContent = "";
    addContact();
});
