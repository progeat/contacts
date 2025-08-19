import { FC, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ContactCard } from 'src/components/ContactCard';
import { ContactDto } from 'src/types/dto/ContactDto';
import { useGetContactsQuery } from 'src/store/contacts';
import { useGetFavoriteContactsQuery } from 'src/store/favorite';

export const FavoritListPage: FC = () => {
  const { data: contactsState } = useGetContactsQuery();
  const { data: favoriteContactsState } = useGetFavoriteContactsQuery();

  const [contacts, setContacts] = useState<ContactDto[]>([]);

  useEffect(() => {
    if (contactsState) {
      setContacts(() =>
        contactsState.filter(({ id }) => favoriteContactsState?.includes(id))
      );
    }
  }, [contactsState, favoriteContactsState]);

  return (
    <Row xxl={4} className="g-4">
      {contacts.map((contact) => (
        <Col key={contact.id}>
          <ContactCard contact={contact} withLink />
        </Col>
      ))}
    </Row>
  );
};
