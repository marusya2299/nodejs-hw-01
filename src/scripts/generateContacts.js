import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();

    for (let i = 0; i < number; i++) {
      const fakeContact = createFakeContact();
      contacts.push(fakeContact);
    }

    await writeContacts(contacts);
    console.log(`${number} contats generated`);
  } catch (error) {
    console.error('Error GENERATE CONTACTS', error.message);
  }
};

generateContacts(5);
