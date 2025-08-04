const sun = document.querySelector('.sun')
const moon = document.querySelector('.moon')
const linkMoon = document.querySelector('link[href="/CSS/dark.css"]')
const linkSun = document.querySelector('link[href="/CSS/light.css"]')
const head = document.querySelector('head')
const header = document.querySelector('header')

sun.addEventListener("click", function() {
    if(linkMoon){
        linkMoon.setAttribute('href', '/CSS/light.css')
    }
})

moon.addEventListener("click", function() {
    if(linkSun){
        linkSun.setAttribute('href', '/CSS/dark.css')
    }
})


// if (sun) {
//     sun.addEventListener("click", function () {

//         if (!document.querySelector('link[href="/CSS/light.css"]')) {
//             let link = document.createElement('link')
//             link.rel = 'stylesheet'
//             link.type = 'text/css'
//             link.href = '/CSS/light.css'
//             head.appendChild(link);

//             let icon = document.createElement('img')
//             icon.className = 'icon moon'
//             icon.src = '/moon-svgrepo-com.svg'
//             icon.alt = 'moon'
//             header.appendChild(icon)
//         }
        
//         if (linkMoon) {
//             linkMoon.parentNode.removeChild(linkMoon);
//             sun.parentNode.removeChild(sun)
//         }
//     })
// }
// if (moon) {
//     moon.addEventListener("click", function () {

//         if (!document.querySelector('link[href="/CSS/dark.css"]')) {
//             let link = document.createElement('link')
//             link.rel = 'stylesheet'
//             link.type = 'text/css'
//             link.href = '/CSS/dark.css'
//             head.appendChild(link);

//             let icon = document.createElement('img')
//             icon.className = 'icon sun'
//             icon.src = '/sun-svgrepo-com.svg'
//             icon.alt = 'sun'
//             header.appendChild(icon)
//         }
        
//         if (linkSun) {
//             linkSun.parentNode.removeChild(linkSun);
//             sun.parentNode.removeChild(moon)
//         }
//     })
// }



// let switchToLightMode = function () {
//     if (linkMoon) {
//         linkMoon.parentNode.removeChild(linkMoon);
//     }

//     if (!document.querySelector('link[href="/CSS/light.css"]')) {
//         let link = document.createElement('link')
//         link.rel = 'stylesheet'
//         link.type = 'text/css'
//         link.href = '/CSS/light.css'
//         head.appendChild(link);

//         let icon = document.createElement('img')
//         icon.className = 'moon'
//         icon.src = '/moon-svgrepo-com.svg'
//         icon.alt = 'moon'
//         header.appendChild(icon)

//         // sun.parentNode.removeChild(sun)

//         sun.style.display = 'none';
//         icon.addEventListener("click", switchToDarkMode);
//     }
// }
// let switchToDarkMode = function () {
//     if (linkSun) {
//         linkSun.parentNode.removeChild(linkSun);
//     }

//     if (!document.querySelector('link[href="/CSS/dark.css"]')) {
//         let link = document.createElement('link')
//         link.rel = 'stylesheet'
//         link.type = 'text/css'
//         link.href = '/CSS/dark.css'
//         head.appendChild(link);

//         let icon = document.createElement('img')
//         icon.className = 'sun'
//         icon.src = '/sun-svgrepo-com.svg'
//         icon.alt = 'sun'
//         header.appendChild(icon)

//         // moon.parentNode.removeChild(moon)

//         moon.style.display = 'none';
//         icon.addEventListener("click", switchToLightMode);
//     }
// }
// if (sun) {
//     sun.addEventListener("click", switchToLightMode())
// }
// if (moon) {
//     moon.addEventListener("click", switchToDarkMode())
// }