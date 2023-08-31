// Importing modules
import createHeader from "./modules/header.js";
import createHero from "./modules/hero.js";

// Creating the elements that will hold whatever the modules return
const contentContainer = document.getElementById('content');
const header = createHeader();
const hero = createHero();





// Appending the elements to the content container
contentContainer.appendChild(hero);
contentContainer.prepend(header);