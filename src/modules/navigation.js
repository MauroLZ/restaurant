// This javascript module handles the navigation of the website
function toggleMenu() {
    const menuContainer = document.querySelector('.menu-container');
    const hero = document.querySelector('.hero');
    menuContainer.style.display = 'flex';
    hero.style.display = 'none';
}

function toggleHero() {
    const menuContainer = document.querySelector('.menu-container');
    const hero = document.querySelector('.hero');
    menuContainer.style.display = 'none';
    hero.style.display = 'flex';
}

// Export the functions
export { toggleMenu, toggleHero };
