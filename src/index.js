import "./styles.css";
import renderHeader from "./header";
import renderHomePage from "./home";
import renderMenu from "./menu";
import renderAboutPage from "./about";

const content = document.getElementById("content");

document.body.insertBefore(renderHeader(), content);
renderHomePage();

function addEventListeners() {
    const homeBtn = document.getElementById("home");
    const menuBtn = document.getElementById("menu");
    const aboutBtn = document.getElementById("about");

    homeBtn.addEventListener("click", renderHomePage);
    menuBtn.addEventListener("click", renderMenu);
    aboutBtn.addEventListener("click", renderAboutPage);
}

addEventListeners();