const carousel = document.querySelector('.carousel');
let currentIndex = 0;

function autoplay() {
    setInterval(() => {
        carousel.style.transform =  `translateX(${(currentIndex * (-33.3))}%)`
        currentIndex++
        if (currentIndex >= (carousel.children.length)){
            currentIndex = 0
        }
}, 3000);
}
autoplay()

const footer = document.querySelector('footer');
const header = document.querySelector('header');
const menu = document.querySelector('#menu');
// HEADER HTML
header.innerHTML = `
<div id="filler"></div>
<a href="./index.html"><div id="logo"><img src="./img/bw_org-copy-1-removebg-preview (1).png" alt=""></div></a>
<div class="socials">
    <a href="tel:+420776769393"><img src="./img/call-outline (1).svg" alt="tel"></a>
    <a href="mailto:forthsite@email.cz"><img src="./img/mail-outline.svg" alt="mail"></a>
    <a href="https://www.instagram.com/stavime_magazin"><img src="./img/logo-instagram (1).svg" alt="Instagram"></a>
</div>`
// MENU HTML
menu.innerHTML = `        <a href="./index.html#main-articles"><span class="menu-option">Aktuálně</span></a>
<a href="./index.html#other-articles-wrapper"><span class="menu-option">Články</span></a>
<a href="./index.html#reports"><span class="menu-option">Reportáže</span></a>
<a href="https://www.instagram.com/stavime_magazin/"><span class="menu-option">Instagram</span></a>
<a href="./reference.html"><span class="menu-option">Reference</span></a>
<a href="./nabidka-prace.html"><span class="menu-option">Nabídka práce</span></a>
<a href="./kontakt.html"><span class="menu-option">Kontakt</span></a>`
// FOOTER HTML
footer.innerHTML = ` <div class="footer-wrapper">
<div id="footer-text">
    <div id="footer-hero">Stavební magazín</div>
    <span>Přinášíme Vám novinky ze stavebnictví z celé Evropy přímo od majitelů firem. Náš tým reportuje zajímavosti přímo z terénu staveb a veletrhů.</span>
</div>
<div id="contact">
    <span id="contact-header">Kontakt</span>
    <span><a href="tel:+420776769393">Tel: +420 776 769 393 </a></span>
    <span><a href="mailto:produkceforthsite@email.cz">produkceforthsite@email.cz</a></span>
</div>
<div id="partners">
    <span id="contact-header">Partneři</span>
    <a href="https://voracekstavby.cz">voracekstavby.cz</a>
    <a href="https://alucast.cz">alucast.cz</a>
    <a href="https://sadrokarton-brno.cz">sadrokarton-brno.cz</a>
    <a href="https://stavimemagazin.cz">stavimemagazin.cz</a>
    <a href="https://karpenplus.cz">karpenplus.cz</a>
    <a href="https://forthsite.cz">forthsite.cz</a>
    <a href="https://suchepodlahy-brno.cz">suchepodlahy-brno.cz</a>
    <a href="https://sadrokarton-brno.cz">sadrokarton-brno.cz</a>
    <a href="https://www.auklan.com/">auklan.com</a>
</div>
</div>
<div class="extras">
<div class="credit"><img src="./img/forthsite_logo_white.png" alt="Logo"></div>
<div id="copyright">Copyright 2023 stavimemagazin. Všechna práva vyhrazena.</div>
</div>`

// weather
const APIKEY = '7b674925742140a6a95130205233006';
let addressData;
const card = document.querySelector('#filler');

async function getAddress(){
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=Czech Republic&aqi=no&lang=cs`);
    addressData = await response.json();
    console.log(addressData);
    return addressData
 }
 async function collect(){
    await getAddress();

    const weatherimg = document.createElement('img');
    weatherimg.src = addressData.current.condition.icon;
    card.appendChild(weatherimg);
    weatherimg.classList.add('weatherimg');
    let weathertext = document.createElement('p');
    card.appendChild(weathertext);
    weathertext.textContent = `${addressData.current.temp_c} °C, ${addressData.location.name}`;
}
collect()