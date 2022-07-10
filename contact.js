const fs = require('fs').promises;
const path = require('path');
const contactsPath = path.join(__dirname, "/db/contacts.json")
const {nanoid} = require("nanoid")
 
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

const addContact = async (name, email, phone) => {
    const contacts = await listContacts();
    const newContacts = {
        id: nanoid(),
        name,
        email,
        phone,
    };
    contacts.push(newContacts);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return newContacts;

}

const removeContact = async (contactId) => {
    const contacts = await listContacts();
    const idx = contacts.findIndex((e) => e.id === `${contactId}`);
    if (idx === -1) {
        return null;
    }
    const [removedContact] = contacts.splice(idx, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return removedContact;
}


module.exports = {
    listContacts,
    getContactById,
    addContact,
    removeContact
}