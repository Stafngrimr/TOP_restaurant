// src/index.js

import "./styles.css";
import { load } from "./load.js";
import { addHome } from "./home.js";
import { addMenu } from "./menu.js";
import { addContact } from "./contact.js";

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const contactButton = document.querySelector("#contact");
const content = document.querySelector("#content");

const body = document.querySelector("body");
const sig = document.createElement("p");

sig.setAttribute("id", "signature");
sig.textContent = "by Stafngrimr";
body.appendChild(sig);

load();

homeButton.addEventListener("click", function() {
    homeButton.classList.add("active");
    menuButton.classList.remove("active");
    contactButton.classList.remove("active");
    
    content.textContent = "";
    addHome();
});

menuButton.addEventListener("click", function() {
    homeButton.classList.remove("active");
    menuButton.classList.add("active");
    contactButton.classList.remove("active");

    content.textContent = "";
    addMenu();
});

contactButton.addEventListener("click", function() {
    homeButton.classList.remove("active");
    menuButton.classList.remove("active");
    contactButton.classList.add("active");

    content.textContent = "";
    addContact();
});

