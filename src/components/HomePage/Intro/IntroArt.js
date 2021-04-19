import styled from "styled-components";

const IntroArtContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  vertical-align: middle;
  flex-wrap: wrap;
  width: 80vw;
  margin: 10px 0;
  background: #d4dcfb;
  border-radius: 36px;
  padding: 1rem;
`;

const IntroArt = ({ images }) => {
  const displayImages = images.map((image) => (
    <img
      className={"displayImages"}
      key={image.alt}
      src={image.src}
      alt={image.alt}
      style={{ height: "9rem" }}
    />
  ));
  return <IntroArtContainer>{displayImages}</IntroArtContainer>;
};

export default IntroArt;
