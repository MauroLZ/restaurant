// Importing modules
import createHeader from "./modules/header.js";
import createHero from "./modules/hero.js";
import createMenu from "./modules/menu.js";
import createContact from "./modules/contact.js";

// Creating the elements that will hold whatever the modules return
const contentContainer = document.getElementById('content');
const header = createHeader();
const hero = createHero();
const menu = createMenu();
const contact = createContact();

// Appending the elements to the content container
contentContainer.prepend(header);
contentContainer.appendChild(hero);
contentContainer.appendChild(menu);
contentContainer.appendChild(contact);
