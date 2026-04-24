// src/index.js

import "./styles.css";
import { addHome, greeting } from "./home.js";
import { addMenu } from "./menu.js";
import { addContact } from "./contact.js";
import homeActiveNotpressed from "./img/home_active_notpressed.png";
import homeInactiveNotpressed from "./img/home_inactive_notpressed.png";
import homeActivePressed from "./img/home_active_pressed.png";
import homeInactivePressed from "./img/home_inactive_pressed.png";

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("button#menu");
const contactButton = document.querySelector("button#contact");
const content = document.querySelector("#content");

const load = (function() {
    addHome();
})();


// Not the best way to implement the below. If statements aren't working? What?
// the buttons are coming up, but need to work out BETTER logic for (in)active stuff
//


homeButton.addEventListener("click", function() {
    homeButton.src = homeActiveNotpressed;
    menuButton.style.color = "white";
    menuButton.style.borderColor = "white";
    contactButton.style.color = "white";
    contactButton.style.borderColor = "white";
    content.textContent = "";

    addHome();
});

homeButton.addEventListener("mouseenter", function() {
    homeButton.src = homeActivePressed;
});

homeButton.addEventListener("mouseleave", function() {
    homeButton.src = homeActiveNotpressed;
});

menuButton.addEventListener("click", function() {
    homeButton.src = homeInactiveNotpressed;
    menuButton.style.color = "red";
    menuButton.style.borderColor = "red";
    contactButton.style.color = "white";
    contactButton.style.borderColor = "white";
    content.textContent = "";
    addMenu();
});

contactButton.addEventListener("click", function() {
    homeButton.src = homeInactiveNotpressed;
    menuButton.style.color = "white";
    menuButton.style.borderColor = "white";
    contactButton.style.color = "red";
    contactButton.style.borderColor = "red";
    content.textContent = "";
    addContact();
});
