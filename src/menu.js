export const addMenu = function() {
    const container = document.querySelector("#content");
    
    const tabDiv = document.createElement("div");
    tabDiv.setAttribute("id", "tabdiv");
    container.appendChild(tabDiv);

    const menuDiv = document.createElement("div");
    menuDiv.setAttribute("id", "menudiv");
    //menuDiv.textContent = "Please peruse the menu and give us a call to order via the contact page!";
    const image1 = document.createElement("div");
    image1.className = "menuItemImage";
    //image1.setAttribute("id", "menuItemImage");
    const image2 = document.createElement("div");
    image2.className = "menuItemImage";
    //image1.setAttribute("id", "menuItemImage");
    const image3 = document.createElement("div");
    image3.className = "menuItemImage";
    //image1.setAttribute("id", "menuItemImage");
    const image4 = document.createElement("div");
    image4.className = "menuItemImage";
    //image1.setAttribute("id", "menuItemImage");



    menuDiv.appendChild(image1);
    menuDiv.appendChild(image2);
    menuDiv.appendChild(image3);
    menuDiv.appendChild(image4);
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

            descs[i] = document.createElement("p");
            descs[i].textContent = descContent[i];
            menuDiv.appendChild(descs[i]);
        }
    };

    const chefTab = function() {
        let itemContent = ["Legs & Mash", "Eyes Surprise", "Human Bacon Sandwich", "Sunday Roast"];
        let descContent = ["Delicious and sumtuous human leg, served on a bed of mashed potatoes, covered in gravy", "A bucket of Human eyes! Juicier even than the mussels!", "Nobody mourns the extinction of the pig since this creation", "Old Human tradition from what was north 'Europe' of roasting meat on Sunday."];

        for(let i=0; i<items.length; i++) {
            items[i] = document.createElement("h2");
            items[i].textContent = itemContent[i];
            menuDiv.appendChild(items[i]);

            descs[i] = document.createElement("p");
            descs[i].textContent = descContent[i];
            menuDiv.appendChild(descs[i]);
        };
    };

    const veganTab = function() {
        const itemContent = ["1", "2", "3", "4"];
        const descContent = ["First one", "Second one", "Third one", "Fourth one"];

        for(let i=0; i<items.length; i++) {
            items[i] = document.createElement("h2");
            items[i].textContent = itemContent[i];
            menuDiv.appendChild(items[i]);

            descs[i] = document.createElement("p");
            descs[i].textContent = descContent[i];
            menuDiv.appendChild(descs[i]);
        };
    };

    const drinksTab = function() {
        const itemContent = ["drinks 1", "2", "3", "4"];
        const descContent = ["First one", "Second one", "Third one", "Fourth one"];

        for(let i=0; i<items.length; i++) {
            items[i] = document.createElement("h2");
            items[i].textContent = itemContent[i];
            menuDiv.appendChild(items[i]);

            descs[i] = document.createElement("p");
            descs[i].textContent = descContent[i];
            menuDiv.appendChild(descs[i]);
        };
    };

    tabButtons[0].addEventListener("click", function() {
        menuDiv.textContent = "";
        seaTab();
    });

    tabButtons[1].addEventListener("click", function() {
        menuDiv.textContent = "";
        chefTab();
    });

    tabButtons[2].addEventListener("click", function() {
        menuDiv.textContent = "";
        veganTab();
    });

    tabButtons[3].addEventListener("click", function() {
        menuDiv.textContent = "";
        drinksTab();
    });
};
