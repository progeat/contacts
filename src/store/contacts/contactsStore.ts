import { makeAutoObservable } from 'mobx';
import { ContactDto } from 'src/types/dto/ContactDto';
import { api } from '../api';
import { favoriteStore } from '../favorite/favoriteStore';

export const contactsStore = makeAutoObservable({
  contacts: [] as ContactDto[],
  *get() {
    const result: ContactDto[] = yield api.getContacts();

    favoriteStore.favorite = result.slice(0, 4).map((contact) => contact.id);

    this.contacts = result;
  },
});
