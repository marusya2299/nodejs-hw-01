import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    const count = contacts.length;
    console.log(`Number of contacts ${count}`);
    return count;
  } catch (error) {
    console.error('Error COUNT CONTACTS', error.message);
  }
};

countContacts();
