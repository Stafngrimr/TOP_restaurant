// src/menu.js

export const addMenu = function() {
    const container = document.querySelector("#content");

    const firstItem = document.createElement("h1");
    const firstDesc = document.createElement("p");
    const secondItem = document.createElement("h1");
    const secondDesc = document.createElement("p");

    firstItem.textContent = "Noodle Power";
    firstDesc.textContent = "Some noodles with a hell of a lot of power!";
    secondItem.textContent = "Burger with Fries";
    secondDesc.textContent = "Weakest item on the menu, but everyone's gotta have it";

    container.appendChild(firstItem);
    container.appendChild(firstDesc);
    container.appendChild(secondItem);
    container.appendChild(secondDesc);
};
