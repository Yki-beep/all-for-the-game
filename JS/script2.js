let body = document.querySelector("body")

function toggleTheme() {
    let theme = document.getElementById('theme');

    if (theme.getAttribute('href') == '/CSS/light.css') {
        theme.setAttribute('href', '/CSS/dark.css');
    } else {
        theme.setAttribute('href', '/CSS/light.css');
    }
}

function fontSizeIncrease(){
    let size = window.getComputedStyle(body).getPropertyValue('font-size');
    let size2 = size.split("px");
    let size3 = size2.join("");
    let size4 = parseInt(size3);
    let newSize = size4 + 2;
    body.style.fontSize = newSize + "px";
}
function fontSizeDecrease(){
    let size = window.getComputedStyle(body).getPropertyValue('font-size');
    let size2 = size.split("px");
    let size3 = size2.join("");
    let size4 = parseInt(size3);
    let newSize = size4 - 2;
    body.style.fontSize = newSize + "px";
    // document.getElementById("demo").style.fontSize = newSize + "px";
}