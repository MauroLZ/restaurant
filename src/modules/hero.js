const createHero = () => {
    // Creating the elements for the hero section
    const hero = document.createElement('div');
    const heroTextH1 = document.createElement('h1');
    const heroTextH2 = document.createElement('h2');
    const heroButton = document.createElement('button');

    // Giving classes and ids to the elements
    hero.classList.add('hero');
    heroTextH1.classList.add('hero-text_h1');
    heroTextH2.classList.add('hero-text_h2');
    heroButton.classList.add('hero-button');

    // Adding content to the elements
    heroTextH1.textContent = "Elegance brewed daily";
    heroTextH2.textContent = "We craft a delightful experience for all your senses, and then coffee";
    heroButton.textContent = "Our Menu";

    // Appending the elements to the hero section and the hero section to the content container
    hero.appendChild(heroTextH1);
    hero.appendChild(heroTextH2);
    hero.appendChild(heroButton);

    const overlayContainer = document.querySelector('.overlay-container');
    setTimeout(() => {
        overlayContainer.style.backgroundImage = 'url("coffee_bg.webp")';
    }, 1000);

    return hero;
}

export default createHero;
