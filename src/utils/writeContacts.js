import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const writeContacts = async (data) => {
  try {
    const json = JSON.stringify(data, null, 2);
    await fs.writeFile(PATH_DB, json, 'utf-8');
  } catch (error) {
    console.error('Error WRITE CONTACTS', error.message);
    throw error;
  }
};
