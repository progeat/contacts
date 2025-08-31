import { makeAutoObservable } from 'mobx';

export const favoriteStore = makeAutoObservable({
  favorite: [] as string[],
});
