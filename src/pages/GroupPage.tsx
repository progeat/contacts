import { FC, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { ContactDto } from 'src/types/dto/ContactDto';
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto';
import { GroupContactsCard } from 'src/components/GroupContactsCard';
import { Empty } from 'src/components/Empty';
import { ContactCard } from 'src/components/ContactCard';
import { observer } from 'mobx-react-lite';
import { contactsStore, groupsStore } from 'src/store';

export const GroupPage: FC = observer(() => {
  const contactsState = contactsStore.contacts;
  const groupContactsState = groupsStore.groups;

  const { groupId } = useParams<{ groupId: string }>();

  const [contacts, setContacts] = useState<ContactDto[]>([]);
  const [groupContacts, setGroupContacts] = useState<GroupContactsDto>();

  useEffect(() => {
    contactsStore.get();
    groupsStore.get();
  }, []);

  useEffect(() => {
    const findGroup = groupContactsState?.find(({ id }) => id === groupId);
    setGroupContacts(findGroup);
    setContacts(() => {
      if (findGroup && contactsState) {
        return contactsState.filter(({ id }) =>
          findGroup.contactIds.includes(id)
        );
      }
      return [];
    });
  }, [contactsState, groupContactsState, groupId]);

  return (
    <Row className="g-4">
      {groupContacts ? (
        <>
          <Col xxl={12}>
            <Row xxl={3}>
              <Col className="mx-auto">
                <GroupContactsCard groupContacts={groupContacts} />
              </Col>
            </Row>
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
        </>
      ) : (
        <Empty />
      )}
    </Row>
  );
});
