import Paragraph from "../shared/Paragraph";
import Heading from "../shared/Heading";
import TextContainer from "../shared/TextContainer";
import BoldSpan from "../shared/BoldSpan";

const CorePillars = () => {
  return (
    <TextContainer>
      <Heading>core pillars</Heading>
      <Paragraph>our process loops through the following operations:</Paragraph>
      <Paragraph>
        <BoldSpan>
          • move revolutionary leaders to revolutionary spaces.
        </BoldSpan>{" "}
        migrate our members off corporate-run platforms, and onto distributed,
        democratized networks. these offer the benefits of fairer pay to
        creators, censorship resistance, and sophisticated funding, monetization
        and ownership capabilities. For example, our musical artists distribute
        their catalogs through decentralized, artist-owned streaming services
        like Resonate and Audius.
      </Paragraph>
      <Paragraph>
        <BoldSpan>• bring our communities with us on our journey.</BoldSpan>{" "}
        invest in research, education, and direct action which brings these
        alternative structures to as many people as possible. this looks like
        live demos, TED-style lecture / story series / podcasts, workshops,
        livestreaming events, and more.
      </Paragraph>
      <Paragraph>
        <BoldSpan>• bridge the old and new worlds.</BoldSpan> develop programs
        to develop these spaces, bringing more contributors and communities to
        join them, driving a virtuous cycle of adoption. as these projects are
        largely community developed and often welcome contributions from outside
        their core developers, our technologists can lead the charge to bring
        the developments our communities need: when systems lack specific
        functions creators need, we will provide technical and product
        contributions toward making those functions available; when the systems
        don't exist at all, we will build our own.
      </Paragraph>
    </TextContainer>
  );
};

export default CorePillars;
