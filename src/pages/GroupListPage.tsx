import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import { GroupContactsCard } from 'src/components/GroupContactsCard';
import { useGetGroupContactsQuery } from 'src/store/groups';

export const GroupListPage: FC = () => {
  const { data: groupContactsState } = useGetGroupContactsQuery();

  return (
    <Row xxl={4}>
      {groupContactsState?.map((groupContacts) => (
        <Col key={groupContacts.id}>
          <GroupContactsCard groupContacts={groupContacts} withLink />
        </Col>
      ))}
    </Row>
  );
};
