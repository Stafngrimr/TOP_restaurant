// src/menu.js

export const addMenu = function() {
    const container = document.querySelector("#content");

    const firstItem = document.createElement("h2");
    const firstDesc = document.createElement("p");
    const secondItem = document.createElement("h2");
    const secondDesc = document.createElement("p");

    firstItem.textContent = "Power Noodles";
    firstDesc.textContent = "Crab based noodle dish, with spring onions and chilli peppers.";
    secondItem.textContent = "Shark Fin Soup";
    secondDesc.textContent = "A flavorful soup made from Shark's fins and an aromatic garnish";

    container.appendChild(firstItem);
    container.appendChild(firstDesc);
    container.appendChild(secondItem);
    container.appendChild(secondDesc);
};


