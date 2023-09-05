const createMenu = () => {
    // Creating elements
    const menuContainer = document.createElement('div');
    const title = document.createElement('h1');
    const itemsContainer = document.createElement('div');
    const itemCard = document.createElement('div');
    const itemPicture = document.createElement('div');
    const itemDescription = document.createElement('div');
    const itemName = document.createElement('h2');

    // Adding classes and ids to the elements
    menuContainer.classList.add('menu-container');
    title.classList.add('menu-title');
    itemsContainer.classList.add('items-container');
    itemCard.classList.add('item-card');
    itemPicture.classList.add('item-picture');
    itemDescription.classList.add('item-description');
    itemName.classList.add('item-name');

    return menuContainer;
}

export default createMenu;