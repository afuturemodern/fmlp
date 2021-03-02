import styled from "styled-components";
import MemberCard from "../components/MembersPage/MemberCard.js";

import members from "../components/MembersPage/members/members.js";

const MembersPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ListContainer = styled.div`
  display: flex;
  margin: var(--space-medium);
  gap: var(--space-medium);
`;

const MembersPage = () => {
  return (
    <MembersPageContainer>
      <ListContainer>
        {members.map((m) => {
          return <MemberCard member={m} />;
        })}
      </ListContainer>
    </MembersPageContainer>
  );
};

export default MembersPage;
