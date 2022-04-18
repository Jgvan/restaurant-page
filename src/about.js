import { updateHeaderButton } from "./header";

export default function renderAboutPage() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    content.appendChild(aboutUs());
    content.appendChild(whereToFindUs());

    updateHeaderButton("about");
}

function aboutUs() {
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    const credits = document.createElement("p");
    const lorem = document.createElement("p");
    const lorem2 = document.createElement("p");

    h1.textContent = "About Us";
    p.textContent = "This is a website for a fictional restaurant. You can reach us at 123-4567890 or ";
    const underlinedText = document.createElement("span");
    underlinedText.textContent = "email us";
    underlinedText.style = "cursor: pointer; text-decoration: underline;";
    p.appendChild(underlinedText);

    credits.textContent = "Sample images used on this website are from users at ";
    const unsplash = document.createElement("a");
    unsplash.href = "https://unsplash.com/";
    unsplash.textContent = "Unsplash";
    unsplash.target = "_blank";
    credits.appendChild(unsplash);

    lorem.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius nulla vestibulum eros maximus, vel imperdiet ante tristique. Suspendisse et sapien nec risus venenatis auctor non sed purus. Integer et iaculis nulla. Quisque efficitur laoreet pretium. Quisque at aliquam elit. In bibendum finibus est, at vehicula augue pharetra et. Nam efficitur efficitur massa. Vivamus mattis ultricies.";
    lorem2.textContent = "Aliquam et eleifend nisi. Integer id nisi metus. Mauris vehicula egestas enim, ut vestibulum magna feugiat in. Pellentesque pellentesque ante leo, vitae pretium magna auctor quis. Etiam mattis lacinia varius. Quisque tristique, tortor ut luctus pretium, nisi lectus dignissim eros, sit amet interdum ligula odio a turpis. Etiam rhoncus odio at neque mattis scelerisque. Suspendisse vitae diam hendrerit, tincidunt risus nec, tempor ante. Sed lobortis imperdiet lectus a tincidunt. Donec id commodo.";

    div.append(h1, p, credits, lorem, lorem2);

    div.classList.add("about-text");

    return div;
}

function whereToFindUs() {
    const div = document.createElement("div");
    const iframe = document.createElement("iframe");
    const h1 = document.createElement("h1");
    div.classList.add("map");

    h1.textContent = "Where to find us";

    iframe.width = 600;
    iframe.height = 450;
    iframe.style = "border:0;";
    iframe.loading = "lazy";
    iframe.allowFullscreen = "";
    iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.154471819087!2d-6.769380662179066!3d62.01673473541503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48bc2e04ac9b3347%3A0x30cf6bf87c4255f7!2zU01TLCBUw7Nyc2hhdm4!5e0!3m2!1sen!2s!4v1650212997674!5m2!1sen!2s";

    div.append(h1, iframe);

    return div;
}