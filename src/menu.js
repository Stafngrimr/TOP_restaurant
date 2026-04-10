// src/menu.js

export const addMenu = function() {
    const container = document.querySelector("#content");
    
    const tabDiv = document.createElement("div");
    container.appendChild(tabDiv);
    const menuDiv = document.createElement("div");
    container.appendChild(menuDiv);

    let tabs = ["Seafood", "Chef", "Vegan", "Drinks"];
    let tabButtons = ["seaButton", "chefButton", "veganButton", "drinksButton"]
    for (let i=0; i<tabs.length; i++) {
        tabButtons[i] = document.createElement("button");
        tabButtons[i].className = "menuOptions";
        tabButtons[i].textContent = tabs[i];
        tabDiv.appendChild(tabButtons[i]);
    };

    let items = ["item1", "item2", "item3", "item4"];
    let descs = ["desc1", "desc2", "desc3", "desc4"]

    const seaTab = function() {
        let itemContent = ["Power Noodles", "Shark Fin Soup", "Mussel Surprise", "Fish Heads on Toast"];
        let descContent = ["Crab based noodle dish, with Spring Onions & Chilli Peppers", "A flavorful soup made from Shark's Fins, complimented by aromatic garnishing", "A bucket of Mussels, what could be better!", "The best part of the Fish on some Toast. To recall simpler times in life"];

        for(let i=0; i<items.length; i++) {
            items[i] = document.createElement("h2");
            items[i].textContent = itemContent[i];
            menuDiv.appendChild(items[i]);
            // weird error happening right here, but doesn't happen right after clicking on "menu".. something is overwriting the menuDiv? or something..

            descs[i] = document.createElement("p");
            descs[i].textContent = descContent[i];
            menuDiv.appendChild(descs[i]);
        }
    };

    const chefTab = function() {
        const firstItem = document.createElement("h2");
        const firstDesc = document.createElement("p");
        
        firstItem.textContent = "Legs & Mash";
        firstDesc.textContent = "Delicious and sumptuous Human leg, served with mashed potatoes and gravy.";

        menuDiv.appendChild = (firstItem);
        menuDiv.appendChild = (firstDesc);
    };

    tabButtons[0].addEventListener("click", function() {
        seaTab();
    });

    tabButtons[1].addEventListener("click", function() {
        chefTab();
    });
};


