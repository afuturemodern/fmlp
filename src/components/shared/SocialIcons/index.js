import styled from 'styled-components';
import logoMap from './logoMap';
import memberCardLogoMap from './memberCardLogoMap';

const Wrapper = styled.div`
  height: 3.2rem;
  width: 3.2rem;
  background-color: ${({ backgroundColor }) => {
    return backgroundColor;
  }};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.75rem;
  margin: 0 0.5rem;
`;

const MembersWrapper = styled.div`
  background-color: ${({ backgroundColor }) => {
    return backgroundColor;
  }};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.75rem;
  margin: 0 0.5rem;
`;

export const SocialIcons = ({ logo, url, backgroundColor = 'transparent' }) => {
  return (
    <Wrapper backgroundColor={backgroundColor}>
      <a href={url} target="_blank" rel="noreferrer">
        {logoMap[logo]}
      </a>
    </Wrapper>
  );
};

export const MemberCardIcons = ({
  logo,
  url,
  backgroundColor = 'transparent',
}) => {
  return (
    <MembersWrapper
      backgroundColor={backgroundColor}
      style={{ display: url !== null ? 'block' : 'none' }}
    >
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        style={{ display: url !== null ? 'block' : 'none' }}
      >
        {url !== null ? memberCardLogoMap[logo] : null}
      </a>
    </MembersWrapper>
  );
};
