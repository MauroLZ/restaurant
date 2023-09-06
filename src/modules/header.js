// Importing the function that toggles the menu section
import { toggleMenu, toggleHero, toggleContact } from "./navigation.js";
const createHeader = () => {
    // Creating the header elements
    const headerElement = document.createElement('header');
    const logo = document.createElement('h1');
    const menuNav = document.createElement('nav');
    const menuList = document.createElement('ul');
    // Creating the li elements for the menuList element
    const home = document.createElement('li');
    const menu = document.createElement('li');
    const contact = document.createElement('li');


    // Adding the necessary classes to the elements
    menuNav.classList.add('menu-nav');
    menuList.classList.add('menu-nav_links');

    // Adding content to the elements
    home.textContent = "Home";
    menu.textContent = "Menu";
    contact.textContent = "Contact";
    logo.innerHTML = "Greem Cafe";

    menu.addEventListener('click', () => {
        toggleMenu();
    });

    home.addEventListener('click', () => {
        toggleHero();
    });

    contact.addEventListener('click', () => {
        toggleContact();
    });

    // Appending the elements to the header element
    headerElement.appendChild(logo);
    menuList.appendChild(home);
    menuList.appendChild(menu);
    menuList.appendChild(contact);
    menuNav.appendChild(menuList);
    headerElement.appendChild(menuNav);

    return headerElement;
};

export default createHeader;
