// This javascript module handles the navigation of the website
function toggleMenu() {
    const menuContainer = document.querySelector('.menu-container');
    const hero = document.querySelector('.hero');
    const contactContainer = document.querySelector('.contact');
    menuContainer.style.display = 'flex';
    hero.style.display = 'none';
    contactContainer.style.display = 'none';
}

function toggleHero() {
    const menuContainer = document.querySelector('.menu-container');
    const hero = document.querySelector('.hero');
    const contactContainer = document.querySelector('.contact');
    menuContainer.style.display = 'none';
    hero.style.display = 'flex';
    contactContainer.style.display = 'none';
}

function toggleContact() {
    const contactContainer = document.querySelector('.contact');
    const menuContainer = document.querySelector('.menu-container');
    const hero = document.querySelector('.hero');
    contactContainer.style.display = 'flex';
    menuContainer.style.display = 'none';
    hero.style.display = 'none';
}

// Export the functions
export { toggleMenu, toggleHero, toggleContact };
