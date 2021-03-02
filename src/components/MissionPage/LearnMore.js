import TextContainer from "../shared/TextContainer";
import Heading from "../shared/Heading.js";
import Paragraph from "../shared/Paragraph.js";
import BoldSpan from "../shared/BoldSpan";

const primerURL =
  "https://docs.google.com/document/d/195v6ziqlhkysueG5T4eOuIAk7SB7ngu_e8eHsE5CoOQ/edit";

const LearnMore = () => {
  return (
    <TextContainer>
      <Heading>learn more</Heading>
      <Paragraph>
        read our full primer{" "}
        <BoldSpan>
          <a href={primerURL}>here</a>
        </BoldSpan>
      </Paragraph>
    </TextContainer>
  );
};

export default LearnMore;
