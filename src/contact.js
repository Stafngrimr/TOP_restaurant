// src/contact.js


export const addContact = function() {
    const container = document.querySelector("#content");

    const header = document.createElement("h1");
    const contentContainer = document.createElement("div");
    const number = document.createElement("p");
    const email = document.createElement("p");
    const satellite = document.createElement("p");
    const location = document.createElement("p");

    header.textContent = "How to reach us";
    contentContainer.setAttribute("id", "contact_container");
    number.textContent = "📱 +e55 894f 48-e39 489fd a23";
    email.textContent = "📨 admin@octodaddy.ven";
    satellite.textContent = "🔲 145.825 - use call sign 'Daddy Menu'";
    location.textContent = "🌌 52.4778195498919, -1.910826526728089, Venus";

    container.appendChild(header);
    container.appendChild(contentContainer);
    contentContainer.appendChild(number);
    contentContainer.appendChild(email);
    contentContainer.appendChild(satellite);
    contentContainer.appendChild(location);
};
