export const addMenu = function() {
    
    const container = document.querySelector("#content");
    
    // creating div for menu headers
    const tabDiv = document.createElement("div");
    tabDiv.setAttribute("id", "tabdiv");
    container.appendChild(tabDiv);

    // creating div & elements for the menu items
    const menuDiv = document.createElement("div");
    menuDiv.setAttribute("id", "menudiv");

    const image1 = document.createElement("div");
    image1.className = "menuItemImage";
    image1.setAttribute("id", "menuItem11");
    const overlay1 = document.createElement("div");
    overlay1.className = "overlay";    

    const image2 = document.createElement("div");
    image2.className = "menuItemImage";
    image2.setAttribute("id", "menuItem12");
    const overlay2 = document.createElement("div");
    overlay2.className = "overlay";
    
    const image3 = document.createElement("div");
    image3.className = "menuItemImage";
    image3.setAttribute("id", "menuItem13");
    const overlay3 = document.createElement("div");
    overlay3.className = "overlay";

    const image4 = document.createElement("div");
    image4.className = "menuItemImage";
    image4.setAttribute("id", "menuItem14");
    const overlay4 = document.createElement("div");
    overlay4.className = "overlay";

    container.appendChild(menuDiv);
    menuDiv.appendChild(image1);
    image1.appendChild(overlay1);
    menuDiv.appendChild(image2);
    image2.appendChild(overlay2);
    menuDiv.appendChild(image3);
    image3.appendChild(overlay3);
    menuDiv.appendChild(image4);
    image4.appendChild(overlay4);

    // creating content for tabs & setting up buttons
    let tabs = ["Seafood", "Chef", "Vegan", "Drinks"];
    let tabButtons = ["seaButton", "chefButton", "veganButton", "drinksButton"]
    for (let i=0; i<tabs.length; i++) {
        tabButtons[i] = document.createElement("button");
        tabButtons[i].className = "menuOptions";
        tabButtons[i].textContent = tabs[i];
        tabDiv.appendChild(tabButtons[i]);
    };

    const overlays = [overlay1, overlay2, overlay3, overlay4]

    // creating content for menu items
    const seaTab = function() {
        let itemContent = ["Power Noodles", "Shark Fin Soup", "Mussel Surprise", "Fish Heads on Toast"];
        let descContent = ["Crab based noodle dish, with Spring Onions & Chilli Peppers", "A flavorful soup made from Shark's Fins, complimented by aromatic garnishing", "A bucket of Mussels, what could be better!", "The best part of the Fish on some Toast. To recall simpler times in life"];

        image1.setAttribute("id", "menuItem11");
        image2.setAttribute("id", "menuItem12");
        image3.setAttribute("id", "menuItem13");
        image4.setAttribute("id", "menuItem14");

        for (let i = 0; i < overlays.length; i++) {
            overlays[i].addEventListener("mouseenter", function() {
                overlays[i].textContent = itemContent[i];
            });

            overlays[i].addEventListener("mouseleave", function() {
                overlays[i].textContent = itemContent[i];
            });
        }
    };

    const chefTab = function() {
        let itemContent = ["Legs & Mash", "Eyes Surprise", "Human Bacon Sandwich", "Sunday Roast"];
        let descContent = ["Delicious and sumtuous human leg, served on a bed of mashed potatoes, covered in gravy", "A bucket of Human eyes! Juicier even than the mussels!", "Nobody mourns the extinction of the pig since this creation", "Old Human tradition from what was north 'Europe' of roasting meat on Sunday."];

        image1.setAttribute("id", "menuItem21");
        image2.setAttribute("id", "menuItem22");
        image3.setAttribute("id", "menuItem23");
        image4.setAttribute("id", "menuItem24");

        for (let i = 0; i < overlays.length; i++) {
            overlays[i].addEventListener("mouseenter", function() {
                overlays[i].textContent = itemContent[i];
            });

            overlays[i].addEventListener("mouseleave", function() {
                overlays[i].textContent = itemContent[i];
            });
        }
    };

    const veganTab = function() {
        const itemContent = ["1", "2", "3", "4"];
        const descContent = ["First one", "Second one", "Third one", "Fourth one"];

        image1.setAttribute("id", "menuItem31");
        image2.setAttribute("id", "menuItem32");
        image3.setAttribute("id", "menuItem33");
        image4.setAttribute("id", "menuItem34");

        for (let i = 0; i < overlays.length; i++) {
            overlays[i].addEventListener("mouseenter", function() {
                overlays[i].textContent = itemContent[i];
            });

            overlays[i].addEventListener("mouseleave", function() {
                overlays[i].textContent = itemContent[i];
            });
        }
    };

    const drinksTab = function() {
        const itemContent = ["drinks 1", "2", "3", "4"];
        const descContent = ["First one", "Second one", "Third one", "Fourth one"];

        image1.setAttribute("id", "menuItem31");
        image2.setAttribute("id", "menuItem32");
        image3.setAttribute("id", "menuItem33");
        image4.setAttribute("id", "menuItem34");

        for (let i = 0; i < overlays.length; i++) {
            overlays[i].addEventListener("mouseenter", function() {
                overlays[i].textContent = itemContent[i];
            });

            overlays[i].addEventListener("mouseleave", function() {
                overlays[i].textContent = itemContent[i];
            });
        }
    };

    // SEAFOOD onclick
    tabButtons[0].addEventListener("click", function() {
        tabButtons.forEach(function(button) {
            if (button === tabButtons[0]) {
                button.classList.add("active");
            } else {
                button.classList.remove("active");
            }
        });
        seaTab();
    });

    // CHEF onclick
    tabButtons[1].addEventListener("click", function() {
        tabButtons.forEach(function(button) {
            if (button === tabButtons[1]) {
                button.classList.add("active");
            } else {
                button.classList.remove("active");
            }
        });
        chefTab();
    });

    // VEGAN onclick
    tabButtons[2].addEventListener("click", function() {
        tabButtons.forEach(function(button) {
            if (button === tabButtons[2]) {
                button.classList.add("active");
            } else {
                button.classList.remove("active");
            }
        });
        veganTab();
    });

    // DRINKS onclick
    tabButtons[3].addEventListener("click", function() {
        tabButtons.forEach(function(button) {
            if (button === tabButtons[3]) {
                button.classList.add("active");
            } else {
                button.classList.remove("active");
            }
        });
        drinksTab();
    });
};
