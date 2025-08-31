import { FC, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ContactCard } from 'src/components/ContactCard';
import { ContactDto } from 'src/types/dto/ContactDto';
import { observer } from 'mobx-react-lite';
import { contactsStore, favoriteStore } from 'src/store';

export const FavoritListPage: FC = observer(() => {
  const contactsState = contactsStore.contacts;
  const favoriteContactsState = favoriteStore.favorite;

  const [contacts, setContacts] = useState<ContactDto[]>([]);

  useEffect(() => {
    contactsStore.get();
  }, []);

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
});
