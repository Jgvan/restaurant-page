export default function renderFooter() {
    const footer = document.createElement("div");
    const p = document.createElement("p");
    const link = document.createElement("a");

    p.textContent = "Website created by ";
    link.href = "https://github.com/Jgvan";
    link.textContent = "Jógvan";
    p.appendChild(link);

    footer.appendChild(p);
    footer.id = "footer";

    return footer;
}