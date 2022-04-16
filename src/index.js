import "./styles.css";
import renderHeader from "./header";
import renderHomePage from "./home";

const content = document.getElementById("content");

document.body.insertBefore(renderHeader(), content);
renderHomePage();