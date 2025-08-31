import { FC, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ContactCard } from 'src/components/ContactCard';
import { FilterForm, FilterFormValues } from 'src/components/FilterForm';
import { ContactDto } from 'src/types/dto/ContactDto';
import { observer } from 'mobx-react-lite';
import { contactsStore, groupsStore } from 'src/store';

export const ContactListPage: FC = observer(() => {
  const contactsState = contactsStore.contacts;
  const groupContactsState = groupsStore.groups;

  const [contacts, setContacts] = useState<ContactDto[]>(contactsState ?? []);

  useEffect(() => {
    contactsStore.get();
    groupsStore.get();
  }, []);

  useEffect(() => {
    if (contactsState) {
      setContacts(contactsState);
    }
  }, [contactsState]);

  const onSubmit = (fv: Partial<FilterFormValues>) => {
    let findContacts: ContactDto[] = contactsState ?? [];

    if (fv.name) {
      const fvName = fv.name.toLowerCase();
      findContacts = findContacts.filter(
        ({ name }) => name.toLowerCase().indexOf(fvName) > -1
      );
    }

    if (fv.groupId && groupContactsState) {
      const groupContacts = groupContactsState.find(
        ({ id }) => id === fv.groupId
      );

      if (groupContacts) {
        findContacts = findContacts.filter(({ id }) =>
          groupContacts.contactIds.includes(id)
        );
      }
    }

    setContacts(findContacts);
  };

  return (
    <Row xxl={1}>
      <Col className="mb-3">
        <FilterForm
          groupContactsList={groupContactsState ?? []}
          initialValues={{}}
          onSubmit={onSubmit}
        />
      </Col>
      <Col>
        <Row xxl={4} className="g-4">
          {contacts.map((contact) => (
            <Col key={contact.id}>
              <ContactCard contact={contact} withLink />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
});
