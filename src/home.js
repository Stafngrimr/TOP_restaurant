// src/home.js

export const addHome = function() {
    const container = document.querySelector("#content");

    const newH1 = document.createElement("h1");
    const newP = document.createElement("p");

    newH1.textContent = "OCTO DADDY!";
    newP.textContent = "This is the page for the Octo Daddy. Prepare thy anus";

    container.appendChild(newH1);
    container.appendChild(newP);
};
