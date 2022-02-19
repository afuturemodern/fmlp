import Paragraph from '../shared/Paragraph';
import Heading from '../shared/Heading';
import TextContainer from '../shared/TextContainer';

function Aeria() {
  return (
    <TextContainer>
      <Heading>aeria</Heading>
      <Paragraph>
        aeria is an interactive map of the social web that helps complementary
        communities efficiently discover each other. it reimagines search in
        virtual space, where creators connect dots, innovate, and chart their
        own pathways to success in the future of art.
      </Paragraph>

      <Paragraph>
        our goal is to supercharge every artist's decision making with human led
        machine intelligence, enabling anyone to find and execute on creative
        opportunities at scale on their own terms.
      </Paragraph>
      <Paragraph>follow our progress or contribute:</Paragraph>
      <Paragraph>
        <a href="https://github.com/afuturemodern" className="hyperlinks">
          githubs
        </a>
      </Paragraph>
      <Paragraph>
        <a
          href={`https://github.com/afuturemodern/aeriaWebsite`}
          className="hyperlinks"
        >
          demo web app
        </a>
        <br />
        <a href="https://github.com/afuturemodern/aeria" className="hyperlinks">
          social network analysis research
        </a>
        <br />
        <a
          href={'https://github.com/afuturemodern/audioAnalysis'}
          className="hyperlinks"
        >
          audio analysis research
        </a>
      </Paragraph>
      <Paragraph>
        <a
          href={
            'https://www.notion.so/aeria-human-led-ai-music-discovery-ed3b767d32f2468a9693695f5c396c00'
          }
          className="hyperlinks"
        >
          notion
        </a>
      </Paragraph>
    </TextContainer>
  );
}

export default Aeria;
