import item11 from "./img/1-1.png";
import item12 from "./img/1-2.png";
import item13 from "./img/1-3.png";
import item14 from "./img/1-4.png";
import item21 from "./img/2-1.png";
import item22 from "./img/2-2.png";
import item23 from "./img/2-3.png";
import item24 from "./img/2-4.png";
import item31 from "./img/3-1.png";
import item32 from "./img/3-2.png";
import item33 from "./img/3-3.png";
import item34 from "./img/3-4.png";
import item41 from "./img/4-1.png";
import item42 from "./img/4-2.png";
import item43 from "./img/4-3.png";
import item44 from "./img/4-4.png";

export const addMenu = function() {
    const container = document.querySelector("#content");
    
    // div for menu headers
    const tabDiv = document.createElement("div");
    tabDiv.setAttribute("id", "tabdiv");
    container.appendChild(tabDiv);

    // div & elements for the menu items
    const menuDiv = document.createElement("div");
    menuDiv.setAttribute("id", "menudiv");

    const cont1 = document.createElement("div");
    cont1.className = "menuContainers";
    const image1 = document.createElement("img");
    image1.className = "menuItemImage";
    const under1 = document.createElement("div");
    under1.className = "underlay";

    const cont2 = document.createElement("div");
    cont2.className = "menuContainers";
    const image2 = document.createElement("img");
    image2.className = "menuItemImage";
    const under2 = document.createElement("div");
    under2.className = "underlay";
    
    const cont3 = document.createElement("div");
    cont3.className = "menuContainers";
    const image3 = document.createElement("img");
    image3.className = "menuItemImage";
    const under3 = document.createElement("div");
    under3.className = "underlay";

    const cont4 = document.createElement("div");
    cont4.className = "menuContainers";
    const image4 = document.createElement("img");
    image4.className = "menuItemImage";
    const under4 = document.createElement("div");
    under4.className = "underlay";

    // attaching images/underlays
    container.appendChild(menuDiv);

    menuDiv.appendChild(cont1);
    cont1.appendChild(image1);
    cont1.appendChild(under1);

    menuDiv.appendChild(cont2);
    cont2.appendChild(image2);
    cont2.appendChild(under2);
    
    menuDiv.appendChild(cont3);
    cont3.appendChild(image3);
    cont3.appendChild(under3);
    
    menuDiv.appendChild(cont4);
    cont4.appendChild(image4);
    cont4.appendChild(under4);

    // content for tabs & setting up buttons
    let tabs = ["Seafood", "Chef", "Vegan", "Drinks"];
    let tabButtons = ["seaButton", "chefButton", "veganButton", "drinksButton"]
    for (let i=0; i<tabs.length; i++) {
        tabButtons[i] = document.createElement("button");
        tabButtons[i].className = "menuOptions";
        tabButtons[i].textContent = tabs[i];
        tabDiv.appendChild(tabButtons[i]);
    };
    tabButtons[0].classList.add("active");

    // array for iterating over underlays
    const unders = [under1, under2, under3, under4]

    // initial text & imagery
    let itemContent = ["Power Noodles", "Shark Fin Soup", "Mussel Surprise", "Fish Heads on Toast"];
    image1.src = item11;
    image2.src = item12;
    image3.src = item13;
    image4.src = item14;

    for (let i = 0; i < unders.length; i++) {
        unders[i].addEventListener("mouseenter", function() {
            unders[i].textContent = itemContent[i];
        });

        unders[i].addEventListener("mouseleave", function() {
            unders[i].textContent = "";
        });
    }

    // content for menu items
    const seaTab = function() {
        itemContent = ["Power Noodles", "Shark Fin Soup", "Mussel Surprise", "Fish Heads on Toast"];

        image1.src = item11;
        image2.src = item12;
        image3.src = item13;
        image4.src = item14;

        for (let i = 0; i < unders.length; i++) {
            unders[i].addEventListener("mouseenter", function() {
                unders[i].textContent = itemContent[i];
            });

            unders[i].addEventListener("mouseleave", function() {
                unders[i].textContent = "";
            });
        }
    };

    const chefTab = function() {
        itemContent = ["Legs & Mash", "Eyes Surprise", "Human Bacon Sandwich", "Sunday Roast"];

        image1.src = item21;
        image2.src = item22;
        image3.src = item23;
        image4.src = item24;

        for (let i = 0; i < unders.length; i++) {
            unders[i].addEventListener("mouseenter", function() {
                unders[i].textContent = itemContent[i];
            });

            unders[i].addEventListener("mouseleave", function() {
                unders[i].textContent = "";
            });
        }
    };

    const veganTab = function() {
        itemContent = ["Seaweed Salad", "Mushroom Risotto", "Grass Tower", "Algae Soup"];

        image1.src = item31;
        image2.src = item32;
        image3.src = item33;
        image4.src = item34;

        for (let i = 0; i < unders.length; i++) {
            unders[i].addEventListener("mouseenter", function() {
                unders[i].textContent = itemContent[i];
            });

            unders[i].addEventListener("mouseleave", function() {
                unders[i].textContent = "";
            });
        }
    };

    const drinksTab = function() {
        itemContent = ["Hot Drinks", "Salt-water", "18 Year Scotch", "Ink Soda"];

        image1.src = item41;
        image2.src = item42;
        image3.src = item43;
        image4.src = item44;

        for (let i = 0; i < unders.length; i++) {
            unders[i].addEventListener("mouseenter", function() {
                unders[i].textContent = itemContent[i];
            });

            unders[i].addEventListener("mouseleave", function() {
                unders[i].textContent = "";
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

