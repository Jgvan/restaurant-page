import { updateHeaderButton } from "./header";

export default function renderAboutPage() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    content.appendChild(aboutUs());

    updateHeaderButton("about");
}

function aboutUs() {
    const div = document.createElement("div");


    return div;
}