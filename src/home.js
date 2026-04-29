// src/home.js

export const addHome = function() {
    const container = document.querySelector("#content");

    const header = document.createElement("h1");
    const span = document.createElement("span");
    const txt1 = document.createElement("p");
    const txt2 = document.createElement("p");

    header.textContent = "Welcome to ";
    span.textContent = "OCTODADDY";
    txt1.textContent = "Our humble little establishment has been a cornerstone of this part of the galaxy for millennia. We started out as a little shack in old Tokyo, where a man whose name is long lost to time served nothing but various parts of octopus.";
    txt2.textContent = "Imagine the irony a thousand years later to find that this establishment is still open, but the human chef and the octopus dinner have swapped places!";

    container.appendChild(header);
    header.appendChild(span);
    container.appendChild(txt1);
    container.appendChild(txt2);
};
