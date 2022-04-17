export default function renderHeader() {
    const header = document.createElement("div");
    header.id = "header";

    const headerLinks = document.createElement("ul");
    headerLinks.classList.add("header-links");

    headerLinks.appendChild(createHeaderLink("Home", "home"));
    headerLinks.appendChild(createHeaderLink("Menu", "menu"));
    headerLinks.appendChild(createHeaderLink("About", "about"));

    header.appendChild(headerLinks);

    return header;
}

function createHeaderLink(linkText, linkId) {
    const listItem = document.createElement("li");

    listItem.appendChild(document.createTextNode(linkText));
    listItem.id = linkId;

    return listItem;
}

export function updateHeaderButton(newBtn) {
    //remove selected class from previous button and add to last clicked button
    
    const oldBtn = document.querySelector(".selected");
    if(oldBtn){
        oldBtn.classList.remove("selected");
    }
    
    document.getElementById(newBtn).classList.add("selected");
}