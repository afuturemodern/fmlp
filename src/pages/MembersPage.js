import styled from 'styled-components';
import MemberCard from '../components/MembersPage/MemberCard.js';

import members from '../components/MembersPage/members/members.js';

const MembersPageContainer = styled.div``;

const ListContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(276px, 1fr));
  margin: var(--space-large);
  grid-gap: var(--space-large);
`;

const MembersPage = () => {
  return (
    <MembersPageContainer>
      <ListContainer>
        {members.map((member, i) => {
          return <MemberCard member={member} key={i} />;
        })}
      </ListContainer>
    </MembersPageContainer>
  );
};

export default MembersPage;
