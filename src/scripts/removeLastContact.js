import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();

    if (contacts.length === 0) {
      console.log('No contacts');
      return;
    }

    const removedContact = contacts.pop();
    await writeContacts(contacts);

    console.log('Last contacts removed', removedContact);
  } catch (error) {
    console.error('Error REMOVE LAST CONTACT', error.message);
  }
};

removeLastContact();
