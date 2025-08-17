import { State } from 'src/types/common';
import { FavoriteContactsDto } from 'src/types/dto/FavoriteContactsDto';

export interface CommonPageProps {
  favoriteContactsState: State<FavoriteContactsDto>;
}
