// Importing modules
import createHeader from "../src/modules/header.js";
import createHero from "../src/modules/hero.js";

// Creating the elements that will hold whatever the modules return
const contentContainer = document.getElementById('content');
const header = createHeader();
const hero = createHero();

// JavaScript code
const overlayContainer = document.querySelector('.overlay-container');

setTimeout(() => {
    overlayContainer.style.backgroundImage = 'url("../assets/coffee_bg-2.jpeg")';
}, 7000); // 7000 milliseconds = 7 seconds


// Appending the elements to the content container
contentContainer.appendChild(hero);
contentContainer.prepend(header);