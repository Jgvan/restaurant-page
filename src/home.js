import { updateHeaderButton } from "./header";

export default function renderHomePage() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    content.appendChild(welcomeMessage());
    updateHeaderButton("home");
}

function welcomeMessage(){
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const p4 = document.createElement("p");
    const p5 = document.createElement("p");
    

    h1.innerText = "Welcome to our great restaurant!"
    h3.innerText = "Below is some text to tell you about our delicious food"
    p.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eros erat, tempor consequat consequat et, dignissim ut quam. Nunc at erat quis leo tristique tristique quis vitae lacus. Donec in ipsum congue ligula ultricies semper. Donec condimentum dignissim dictum. Phasellus sed dui sed augue sodales auctor in a enim. Sed at libero elit. Aenean consequat nibh velit, eget tincidunt turpis aliquam ut. Maecenas non ornare leo. Suspendisse potenti. Fusce vel ante non justo tempor molestie.";
    p2.innerText = "Sed tempor, ex pretium venenatis tempus, nibh mi luctus arcu, in ornare felis augue ut neque. Suspendisse dictum vulputate libero, convallis molestie odio ultricies vel. Suspendisse varius sem fermentum diam vulputate, a viverra lacus posuere. Vestibulum et leo sed enim congue varius. Nulla convallis sapien vel dui elementum, vel faucibus odio egestas. Donec ornare sem mi, ac facilisis magna laoreet non. Donec neque nunc, consectetur vitae consectetur id, sodales in massa. Sed faucibus dui vel quam vestibulum, at ultricies lacus semper. Etiam id consectetur velit. Curabitur nec sapien vitae est sodales placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In risus lorem, tincidunt sit amet leo non, finibus consectetur massa. Curabitur convallis condimentum ultrices. Suspendisse porta, nisi at lacinia mollis, est mi rutrum diam, vel malesuada metus metus a ligula. Donec nec libero in orci vestibulum mattis tincidunt rhoncus ligula.";
    p3.innerText = "Curabitur placerat est eu nulla congue maximus. Nullam suscipit nisl sit amet justo aliquet consequat in sed neque. Cras placerat consequat nibh, a volutpat nisi iaculis vitae. Pellentesque in molestie ligula. Fusce molestie consequat dui eget dapibus. Aenean non nulla a ligula finibus ultrices. Aliquam tempor augue facilisis, mattis mi vitae, lobortis nulla. Fusce hendrerit porta est vel porttitor.";
    p4.innerText = "Aliquam ex eros, molestie non suscipit nec, lacinia in odio. Suspendisse eu dui nec ipsum mattis fringilla. Nam nisi velit, consectetur et urna a, gravida placerat dui. Etiam fermentum magna in ipsum sollicitudin semper. Proin tempus faucibus erat, sit amet imperdiet turpis hendrerit eu. Nulla malesuada viverra condimentum. Donec vitae velit dictum, gravida lacus sed, malesuada magna. Nam auctor nisi urna, ut gravida lorem fermentum id. Sed volutpat mattis est, in fringilla urna. Nam ac blandit libero. Aliquam aliquam lectus pretium, semper justo at, malesuada risus. Sed eu libero vitae lectus maximus placerat.";
    p5.innerText = "Maecenas finibus nibh dignissim, rhoncus magna id, volutpat neque. Etiam et lacus eu quam consequat aliquet vel sed nunc. Pellentesque sit amet finibus nunc, at varius nunc. Donec et mattis nulla, et venenatis nulla. Mauris dictum erat placerat luctus aliquet. Aenean elementum urna ex, ut convallis ipsum porttitor vitae. Duis consectetur rhoncus sem in rhoncus. Sed pulvinar dignissim felis a molestie.";

    div.appendChild(h1);
    div.appendChild(h3);
    div.appendChild(p)
    div.appendChild(p2)
    div.appendChild(p3)
    div.appendChild(p4)
    div.appendChild(p5)
    div.classList.add("home-text")

    return div;
}

