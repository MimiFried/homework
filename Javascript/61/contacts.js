(function () {
    'use strict';

    function get(id) {
        return document.getElementById(id);
    }

    function setCss(element, property, value) {
        element.style[property] = value;
    }

    const contacts = [];
    const contactForm = get('contactForm');
    const firstInput = get('first');
    const lastInput = get('last');
    const emailInput = get('email');
    const phoneInput = get('phone');

    get('add').addEventListener('click', () => {
        setCss(contactForm, 'display', 'block');
    });

    function hideAddContactForm() {
        contactForm.reset();
        setCss(contactForm, 'display', 'none');
    }

    contactForm.addEventListener('submit', e => {
        e.preventDefault();

        const contactsTable = get('contacts');

        if (!contacts.length) {
            contactsTable.deleteRow(1);
        }

        const newContact = {
            first: firstInput.value,
            last: lastInput.value,
            email: emailInput.value,
            phone: phoneInput.value
        };

        contacts.push(newContact);


        const newRow = contactsTable.insertRow();
        const firstCell = newRow.insertCell();
        const lastCell = newRow.insertCell();
        const emailCell = newRow.insertCell();
        const phoneCell = newRow.insertCell();
        const deleteCell = newRow.insertCell();

        firstCell.innerHTML = newContact.first;
        lastCell.innerHTML = newContact.last;
        emailCell.innerHTML = newContact.email;
        phoneCell.innerHTML = newContact.phone;
        deleteCell.innerHTML = 'delete';

        const deleteButton = document.createElement('button');
        deleteCell.appendChild(deleteButton);

        deleteButton.addEventListener('click', () => {
            contactsTable.deleteRow(newRow.rowIndex);
        });

        // setCss(contactForm, 'display', 'none');
        hideAddContactForm();
    });

    get('cancel').addEventListener('click', hideAddContactForm);

}());