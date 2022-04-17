import { updateHeaderButton } from "./header";
import steak from "./assets/img/chumil-photo-TK5VlaGqkZc-unsplash.jpg";
import hamburger from "./assets/img/eiliv-sonas-aceron-pu6b4yIlQF4-unsplash.jpg";
import ribs from "./assets/img/jason-leung-WJphLztU4eY-unsplash.jpg";
import chicken from "./assets/img/ivana-cajina-qvQdLikf7wk-unsplash.jpg";

export default function renderMenu() {
    const content = document.getElementById("content")
    const menu = document.createElement("div");

    menu.classList.add("menu");
    content.innerHTML = "";

    content.appendChild(menuIntro());

    menu.appendChild(addMenuItem("Steak", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut feugiat nisi. Donec euismod elementum iaculis. Nunc aliquet, nunc ac accumsan fringilla, odio arcu viverra sapien, id consectetur mi ligula sit amet sapien. Praesent rhoncus lorem sed lectus.", steak));
    menu.appendChild(addMenuItem("Hamburger", "Proin ac nisl finibus, feugiat orci vitae, scelerisque tellus. Donec molestie leo at vestibulum lacinia. Cras consectetur in lectus a interdum. Suspendisse gravida faucibus lorem id malesuada. Curabitur consequat vel sem pellentesque rhoncus. Donec interdum mattis dolor, in fermentum ipsum commodo at.", hamburger));
    menu.appendChild(addMenuItem("Ribs", "Suspendisse potenti. Nullam purus nulla, viverra eu erat vel, convallis ornare tortor. Sed imperdiet orci et neque fringilla lacinia. Praesent et sagittis massa. Nam.", ribs));
    menu.appendChild(addMenuItem("Chicken wings", "Vestibulum metus nunc, eleifend ut auctor in, ornare vel erat. Ut sagittis lacus in ante aliquam, eu convallis dolor tincidunt. Duis non dolor convallis ante rhoncus suscipit." ,chicken));

    content.appendChild(menu);
    updateHeaderButton("menu");
}

function menuIntro() {
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const h3 = document.createElement("h3");
    h1.textContent = "This is our menu for the 2022 spring season"
    h3.textContent = "If you have any questions about the menu our friendly staff is happy to help you!"

    div.appendChild(h1);
    div.appendChild(h3);

    div.classList.add("menu-header");

    return div;
}

function addMenuItem(name, description, image) {
    const item = document.createElement("div");
    const itemDescription = document.createElement("div");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    const img = document.createElement("img");
    
    h1.textContent = name;
    p.textContent = description;
    img.src = image;

    itemDescription.appendChild(h1);
    itemDescription.appendChild(p);
    item.appendChild(itemDescription);
    item.appendChild(img);

    item.classList.add("menu-item");
    itemDescription.classList.add("item-description");

    return item;
}