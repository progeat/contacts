import { FC, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ContactCard } from 'src/components/ContactCard';
import { ContactDto } from 'src/types/dto/ContactDto';
import { useAppSelector } from 'src/store/hooks';
import { useGetContactsQuery } from 'src/store/contacts';

export const FavoritListPage: FC = () => {
  const { data: contactsState } = useGetContactsQuery();
  const favoriteContactsState = useAppSelector((state) => state.favorite);

  const [contacts, setContacts] = useState<ContactDto[]>([]);

  useEffect(() => {
    if (contactsState) {
      setContacts(() =>
        contactsState.filter(({ id }) => favoriteContactsState.includes(id))
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
