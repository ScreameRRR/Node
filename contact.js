const fs = require('fs').promises;
const path = require('path');
const contactsPath = path.join(__dirname, "/db/contacts.json")
 
const listContacts = async () => {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    return contacts;
}

function getContactById(contactId) {
  // ...твій код
}

function removeContact(contactId) {
  // ...твій код
}

function addContact(name, email, phone) {
  // ...твій код
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
}