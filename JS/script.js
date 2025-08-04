
window.onload = function () {
    let body = document.querySelector("body")
    let newSize = localStorage.getItem('fontSize')
    body.style.fontSize = newSize + "px";

    let theTheme = document.getElementById('theme');

    if (localStorage.getItem("theme") == "light") {
        theTheme.setAttribute('href', '/CSS/light.css');
    } else {
        theTheme.setAttribute('href', '/CSS/dark.css');
    }
}

function toggleTheme() {
    let theTheme = document.getElementById('theme');
    if (localStorage.getItem("theme") == "light") {
        theTheme.setAttribute('href', '/CSS/dark.css');
        localStorage.setItem("theme", "dark");
    } else {
        theTheme.setAttribute('href', '/CSS/light.css');
        localStorage.setItem("theme", "light");
    }
}


function fontSizeIncrease() {
    let body = document.querySelector("body")
    let fontSize = window.getComputedStyle(body).getPropertyValue('font-size');

    if (parseInt(fontSize.split("px").join("")) < 40) {

        let size = parseInt(fontSize.split("px").join("")) + 2
        localStorage.setItem('fontSize', size)
        body.style.fontSize = size + "px";
    }
}
function fontSizeDecrease() {
    let body = document.querySelector("body")
    let fontSize = window.getComputedStyle(body).getPropertyValue('font-size');

    if (parseInt(fontSize.split("px").join("")) > 14) {

        let size = parseInt(fontSize.split("px").join("")) -  2
        localStorage.setItem('fontSize', size)
        body.style.fontSize = size + "px";
    }
}
