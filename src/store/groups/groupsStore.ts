import { makeAutoObservable } from 'mobx';
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto';
import { api } from '../api';

export const groupsStore = makeAutoObservable({
  groups: [] as GroupContactsDto[],
  *get() {
    const result: GroupContactsDto[] = yield api.getGroups();

    this.groups = result;
  },
});
