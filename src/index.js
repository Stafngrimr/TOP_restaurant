// src/index.js

import "./styles.css";
import { addHome, greeting } from "./home.js";
import { addMenu } from "./menu.js";
import { addContact } from "./contact.js";

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const contactButton = document.querySelector("#contact");
const content = document.querySelector("#content");

addHome();

homeButton.addEventListener("click", function() {
    content.textContent = "";
    addHome();
});

menuButton.addEventListener("click", function() {
    content.textContent = "";
    addMenu();
});

contactButton.addEventListener("click", function() {
    content.textContent = "";
    addContact();
});
