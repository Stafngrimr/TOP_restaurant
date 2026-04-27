// src/index.js

import "./styles.css";
import { addHome, greeting } from "./home.js";
import { addMenu } from "./menu.js";
import { addContact } from "./contact.js";
import { load } from "./load.js";
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

const body = document.querySelector("body");
const sig = document.createElement("p");
sig.setAttribute("id", "signature");
sig.textContent = "by Stafngrimr";
body.appendChild(sig);

load();
let page = "home";

homeButton.addEventListener("click", function() {
    page = "home";
    homeButton.src = homeActiveNotpressed;
    menuButton.src = menuInactiveNotpressed;
    contactButton.src = contactInactiveNotpressed;

    content.textContent = "";
    addHome();
});

homeButton.addEventListener("mouseenter", function() {
    if (page === "home") {
        homeButton.src = homeActivePressed;
    } else {
        homeButton.src = homeInactivePressed;
    }
});

homeButton.addEventListener("mouseleave", function() {
    if (page === "home") {
        homeButton.src = homeActiveNotpressed;
    } else {
        homeButton.src = homeInactiveNotpressed;
    }
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
    if (page === "menu") {
        menuButton.src = menuActivePressed;
    } else {
        menuButton.src = menuInactivePressed;
    }
});

menuButton.addEventListener("mouseleave", function() {
    if (page === "menu") {
        menuButton.src = menuActiveNotpressed;
    } else {
        menuButton.src = menuInactiveNotpressed;
    }
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
    if (page === "contact") {
        contactButton.src = contactActivePressed;
    } else {
        contactButton.src = contactInactivePressed;
    }
});

contactButton.addEventListener("mouseleave", function() {
    if (page === "contact") {
        contactButton.src = contactActiveNotpressed;
    } else {
        contactButton.src = contactInactiveNotpressed;
    }
});

