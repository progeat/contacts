import { API_URL, CONTACTS_URL, GROUP_CONTACTS_URL } from 'src/constants/env';
import { ContactDto } from 'src/types/dto/ContactDto';

class Api {
  async getContacts(): Promise<ContactDto[]> {
    const response = await fetch(`${API_URL}${CONTACTS_URL}`);
    const data = await response.json();

    return data;
  }

  async getGroups(): Promise<ContactDto[]> {
    const response = await fetch(`${API_URL}${GROUP_CONTACTS_URL}`);
    const data = await response.json();

    return data;
  }
}

export const api = new Api();
