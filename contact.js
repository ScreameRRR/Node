const fs = require('fs').promises;
const path = require('path');
const contactsPath = path.join(__dirname, "/db/contacts.json")
 
const listContacts = async () => {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    return contacts;
}

const getContactById = async (contactId) => {
    const contacts = await listContacts();
    const result = contacts.find((e) => e.id === `${contactId}`);  
    
    if (!result) {
        return null;
    } 
    return result;

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