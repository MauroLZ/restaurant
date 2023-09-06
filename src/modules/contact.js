// Function that creates the contact section
const createContact = () => {
    // Creating the elements for the contact section
    const contact = document.createElement('div');
    const contactTextH1 = document.createElement('h1');
    const contactTextH2 = document.createElement('h2');
    const contactTextP = document.createElement('p');
    const contactButton = document.createElement('button');

    // Giving classes and ids to the elements
    contact.classList.add('contact');
    contactTextH1.classList.add('contact-text_h1');
    contactTextH2.classList.add('contact-text_h2');
    contactTextP.classList.add('contact-text_p');
    contactButton.classList.add('contact-button');

    // Adding content to the elements
    contactTextH1.textContent = "Contact Us";
    contactTextH2.textContent = "We're always ready to serve you";
    contactTextP.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptates.";
    contactButton.textContent = "Contact Us";

    // Appending the elements to the contact section and the contact section to the content container
    contact.appendChild(contactTextH1);
    contact.appendChild(contactTextH2);
    contact.appendChild(contactTextP);
    contact.appendChild(contactButton);

    return contact;
}

export default createContact;