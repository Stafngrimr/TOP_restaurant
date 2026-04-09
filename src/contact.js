// src/contact.js


export const addContact = function() {
    const container = document.querySelector("#content");

    const header = document.createElement("h1");
    const desc = document.createElement("p");

    header.textContent = "My Number";
    desc.textContent = "You must be joking, right.";

    container.appendChild(header);
    container.appendChild(desc);
};
