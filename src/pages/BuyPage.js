import styled from 'styled-components';
import BuyForm from '../components/BuyPage/BuyForm.js';
import ChargeSummaryGrid from '../components/BuyPage/ChargeSummaryGrid.js';
import TermsDisclaimer from '../components/BuyPage/TermsDisclaimer.js';
import Heading from '../components/shared/Heading.js';
import SoulfulOfNoise from '../images/SoufulOfNoise.jpeg';

const BuyContainer = styled.div``;

const PaymentContainer = styled.div`
  display: flex;
  flex-direction: row;
  // jusify-content: center;
`;

const ImageStyle = styled.div`
  // width: 30vw;
`;

const Image = ({ src, alt }) => {
  return <img src={src} alt={alt} width={'300rem'} />;
};

function BuyPage() {
  return (
    <BuyContainer>
      <Heading>buy BU1DL tokens:</Heading>
      {/* add amount and total compnent */}
      <PaymentContainer>
        <ImageStyle>
          {/* <a
            href={'https://soulfulofnoise.com/festival'}
            
          > */}
          <Image src={SoulfulOfNoise} alt={'SoulfulofNoise Music Festival'} />
          {/* </a> */}
        </ImageStyle>
        <BuyForm />
        <ChargeSummaryGrid />
      </PaymentContainer>
      {/* terms of sevice link */}
      <TermsDisclaimer />
    </BuyContainer>
  );
}

export default BuyPage;
