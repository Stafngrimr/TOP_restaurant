// src/contact.js
import { addHome } from "./home.js";
import homeActiveNotpressed from "./img/home_active_notpressed.png";
import menuInactiveNotpressed from "./img/menu_inactive_notpressed.png";
import contactInactiveNotpressed from "./img/contact_inactive_notpressed.png";
const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const contactButton = document.querySelector("#contact");

export const load = function() {
    addHome();
    homeButton.src = homeActiveNotpressed;
    menuButton.src = menuInactiveNotpressed;
    contactButton.src = contactInactiveNotpressed;
};
