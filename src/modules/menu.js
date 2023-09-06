// Function that creates menu items with the parameters of name, description and price and appends those elements to the item-card
const createMenuItem = (itemName, itemDescription, itemPrice, itemImage) => {
    const itemCard = document.createElement('div');
    itemCard.classList.add('item-card');

    const itemNameElement = document.createElement('h2');
    itemNameElement.classList.add('item-name');
    itemNameElement.textContent = itemName;

    const itemDescriptionElement = document.createElement('p');
    itemDescriptionElement.classList.add('item-description');
    itemDescriptionElement.textContent = itemDescription;

    const itemPriceElement = document.createElement('p');
    itemPriceElement.classList.add('item-price');
    itemPriceElement.textContent = `$${itemPrice}`;

    const itemPictureElement = document.createElement('div');
    const itemPicture = document.createElement('img');
    itemPictureElement.classList.add('item-picture');

// Set the 'src' attribute of the 'img' element
    itemPicture.src = itemImage;

    itemCard.appendChild(itemNameElement);
    itemPictureElement.appendChild(itemPicture);
    itemCard.appendChild(itemPictureElement);
    itemCard.appendChild(itemDescriptionElement);
    itemCard.appendChild(itemPriceElement);

    return itemCard;
};

const createMenu = () => {
    // Creating elements
    const menuContainer = document.createElement('div');
    const title = document.createElement('h1');
    const itemsContainer = document.createElement('div');
    const itemCard = document.createElement('div');
    const itemPicture = document.createElement('div');
    const itemDescription = document.createElement('div');
    const itemName = document.createElement('h2');
    const menuBlur = document.createElement('div');

    // Adding classes and ids to the elements
    menuContainer.classList.add('menu-container');
    title.classList.add('menu-title');
    itemsContainer.classList.add('items-container');
    itemCard.classList.add('item-card');
    itemPicture.classList.add('item-picture');
    itemDescription.classList.add('item-description');
    itemName.classList.add('item-name');

    // This is a data structure that holds the data we want to put in the menu items
    const menuItemsData = [
        {
            name: 'Coffee',
            description: 'A cup of freshly brewed coffee',
            price: 2.99,
            image: 'americano.webp'
        },
        {
            name: 'Cappuccino',
            description: 'Rich espresso with steamed milk and foam',
            price: 3.99,
            image: 'americano.png'
        },
        {
            name: 'Latte',
            description: 'Espresso with steamed milk and a touch of foam',
            price: 3.49,
            image: 'americano.png'
        },
        {
            name: 'Latte',
            description: 'Espresso with steamed milk and a touch of foam',
            price: 3.49,
            image: 'americano.png'
        },
        {
            name: 'Latte',
            description: 'Espresso with steamed milk and a touch of foam',
            price: 3.49,
            image: 'americano.png'
        },
        {
            name: 'Latte',
            description: 'Espresso with steamed milk and a touch of foam',
            price: 3.49,
            image: 'americano.png'
        },
    ];

    // For each item in the data structure, create a menu item and append it to the items container
    menuItemsData.forEach(itemData => {
        // For every item in the data structure, it creates a menu item
        // Then it gives that item the corresponding data from the structure
        const menuItem = createMenuItem(itemData.name, itemData.description, itemData.price, itemData.image);
        // Finally, appends the now created menu item to the container that holds the menu items
        itemsContainer.appendChild(menuItem);
    });

    // Giving texts to the elements
    title.textContent = 'Menu';

    // Appending the elements
    menuContainer.appendChild(title);
    menuContainer.appendChild(itemsContainer);

    return menuContainer;
}


export default createMenu;