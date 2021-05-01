import Paragraph from '../shared/Paragraph';
import Heading from '../shared/Heading';
import TextContainer from '../shared/TextContainer';

function Aeria() {
  return (
    <TextContainer>
      <Heading>aeria</Heading>
      <Paragraph>
        artel is a collective empowering underground pioneers in art and media
        with new ways to manifest the value of their work.
      </Paragraph>
      <Paragraph>
        {' '}
        we release artworks through innovations like blockchain, which enable
        true artistic ownership and direct monetization from our supporters.
      </Paragraph>
      <Paragraph>
        interact with and invest in members of artel directly using our social
        tokens, $FMB and $BUILD. holding enough of these tokens lets you access
        hidden content in our private community discord, including 🎤live
        streamed performances, experiences, and art sales, from some names you
        may know!
      </Paragraph>
      <Paragraph>
        📈 educational resources, collaboration and gig opportunities with
        subject matter experts on everything from software, to stocks and
        cryptocurrency, to art, design, science, and more 🎮 free entry cash
        prize gaming tournaments and much, much more to come. learn more about
        the artel vision here.
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
