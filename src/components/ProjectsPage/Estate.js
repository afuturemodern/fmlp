import Paragraph from '../shared/Paragraph';
import Heading from '../shared/Heading';
import TextContainer from '../shared/TextContainer';

function Estate() {
  return (
    <TextContainer>
      <Heading>e-state</Heading>
      <Paragraph>
        e-state is a landlord review and renters association app, which
        incentivizes crowdsourced geolocal information and collective action to
        put communities in control of more livable, affordable cities. it aims
        to impede the progress of gentrification by making rental markets more
        transparent and, ultimately, enabling sustainable pathways for long term
        residents to invest in, own and steward their own neighborhoods.
      </Paragraph>
      <Paragraph>learn more or give feedback:</Paragraph>

      <Paragraph>
        <a href="https://github.com/afuturemodern" className="hyperlinks">
          githubs
        </a>
      </Paragraph>

      <Paragraph>
        <a
          href="https://github.com/afuturemodern/e-state-fe"
          className="hyperlinks"
        >
          demo web app
        </a>
      </Paragraph>
      <Paragraph>
        <a
          href="https://github.com/afuturemodern/e-state"
          className="hyperlinks"
        >
          smart contract research
        </a>
      </Paragraph>
      <Paragraph>
        <a
          href="https://www.notion.so/e-state-peer-to-peer-real-estate-1fea5c001ab64506a5f99305a7c850d2"
          className="hyperlinks"
        >
          e-state notion
        </a>
      </Paragraph>
    </TextContainer>
  );
}

export default Estate;
