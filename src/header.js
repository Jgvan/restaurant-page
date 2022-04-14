export default function renderHeader() {
    const header = document.createElement("div");
    header.classList.add("header");

    const headerLinks = document.createElement("ul");
    headerLinks.classList.add("header-links");

    headerLinks.appendChild(createHeaderLink("Home", "home"));
    headerLinks.appendChild(createHeaderLink("Menu", "menu"));
    headerLinks.appendChild(createHeaderLink("About", "about"));

    header.appendChild(headerLinks);

    return header;
}

function createHeaderLink(linkText, linkClass) {
    const listItem = document.createElement("li");

    listItem.appendChild(document.createTextNode(linkText));
    listItem.classList.add(linkClass);

    return listItem;
}