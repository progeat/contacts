import { observer } from 'mobx-react-lite';
import { FC, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { GroupContactsCard } from 'src/components/GroupContactsCard';
import { groupsStore } from 'src/store';

export const GroupListPage: FC = observer(() => {
  const groupContactsState = groupsStore.groups;

  useEffect(() => {
    groupsStore.get();
  }, []);

  return (
    <Row xxl={4}>
      {groupContactsState?.map((groupContacts) => (
        <Col key={groupContacts.id}>
          <GroupContactsCard groupContacts={groupContacts} withLink />
        </Col>
      ))}
    </Row>
  );
});
