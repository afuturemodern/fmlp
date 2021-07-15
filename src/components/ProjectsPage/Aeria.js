import Paragraph from '../shared/Paragraph';
import Heading from '../shared/Heading';
import TextContainer from '../shared/TextContainer';

function Aeria() {
  return (
    <TextContainer>
      <Heading>aeria</Heading>
      <Paragraph>
      aeria is an interactive map of the social web that helps complementary communities efficiently discover each other. 
      it reimagines search in virtual space, where creators connect dots, innovate, and chart their own pathways to success in the future of art. 

      </Paragraph>
 
     
      <Paragraph>
      our goal is to supercharge every artist's decision making with human led machine intelligence, 
      enabling anyone to find and execute on creative opportunities at scale on their own terms.
      </Paragraph>
      <Paragraph>follow our progress or contribute:</Paragraph>
      <Paragraph>
        <a href="https://github.com/afuturemodern" className="hyperlinks">
          githubs
        </a>
      </Paragraph>
      <Paragraph>
        <a
          href={`https://www.figma.com/file/Jjs28AXfVtQogC73oCRsG2/future-modern-(Copy)?node-id=173%3A31`}
          className="hyperlinks"
        >
          demo web app
        </a>
        <br />
        <a
          href="https://github.com/afuturemodern/aeriaWebsite"
          className="hyperlinks"
        >
          social network analysis research
        </a>
        <br />
        <a
          href={
            'https://www.figma.com/exit?url=https%3A%2F%2Fgithub.com%2Fafuturemodern%2FaudioAnalysis&fuid=876231781300439862'
          }
          className="hyperlinks"
        >
          audio analysis research
        </a>
      </Paragraph>
      <Paragraph>
        <a
          href={
            'https://www.figma.com/file/Jjs28AXfVtQogC73oCRsG2/future-modern-(Copy)?node-id=173%3A31'
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
