// src/index.js

import "./styles.css";
import { addHome, greeting } from "./home.js";
import { addMenu } from "./menu.js";
import { addContact } from "./contact.js";
import homeActiveNotpressed from "./img/home_active_notpressed.png";
import homeInactiveNotpressed from "./img/home_inactive_notpressed.png";
import homeActivePressed from "./img/home_active_pressed.png";
import homeInactivePressed from "./img/home_inactive_pressed.png";
import menuActiveNotpressed from "./img/menu_active_notpressed.png";
import menuInactiveNotpressed from "./img/menu_inactive_notpressed.png";
import menuActivePressed from "./img/menu_active_pressed.png";
import menuInactivePressed from "./img/menu_inactive_pressed.png";
import contactActiveNotpressed from "./img/contact_active_notpressed.png";
import contactInactiveNotpressed from "./img/contact_inactive_notpressed.png";
import contactActivePressed from "./img/contact_active_pressed.png";
import contactInactivePressed from "./img/contact_inactive_pressed.png";

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const contactButton = document.querySelector("#contact");
const content = document.querySelector("#content");

const load = (function() {
    addHome();
    homeButton.src = homeActiveNotpressed;
    menuButton.src = menuInactiveNotpressed;
    contactButton.src = contactInactiveNotpressed;

    let page = "home";
})();


// Not the best way to implement the below. If statements aren't working? What?
// the buttons are coming up, but need to work out BETTER logic for (in)active stuff
//
// Now the buttons arent' changing the links?


homeButton.addEventListener("click", function() {
    page = "home";
    homeButton.src = homeActiveNotpressed;
    menuButton.src = menuInactiveNotpressed;
    contactButton.src = contactInactiveNotpressed;

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
    page = "menu"
    homeButton.src = homeInactiveNotpressed;
    menuButton.src = menuActiveNotpressed;
    contactButton.src = contactInactiveNotpressed;

    content.textContent = "";
    addMenu();
});

menuButton.addEventListener("mouseenter", function() {
    menuButton.src = menuActivePressed;
});

menuButton.addEventListener("mouseleave", function() {
    menuButton.src = menuActiveNotpressed;
});

contactButton.addEventListener("click", function() {
    page = "contact";
    homeButton.src = homeInactiveNotpressed;
    menuButton.src = menuInactiveNotpressed;
    contactButton.src = contactActiveNotpressed;

    content.textContent = "";
    addContact();
});

contactButton.addEventListener("mouseenter", function() {
    contactButton.src = contactActivePressed;
});

contactButton.addEventListener("mouseleave", function() {
    contactButton.src = contactActiveNotpressed;
});
