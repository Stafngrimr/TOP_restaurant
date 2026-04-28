// src/contact.js
import { addHome } from "./home.js";
const homeButton = document.querySelector("#home");

export const load = function() {
    homeButton.className = "active";
    addHome();
};
