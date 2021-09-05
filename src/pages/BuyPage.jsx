import { useReducer } from 'react';
import { BuyPageContext, buyPageReducer, initialBuyPageStore } from '../components/BuyPage/store'
import styled from 'styled-components';
import PaymentButtons from '../components/BuyPage/PaymentButtons.jsx';
import ChargeSummaryGrid from '../components/BuyPage/ChargeSummaryGrid.jsx';
import TermsDisclaimer from '../components/BuyPage/TermsDisclaimer';
import Heading from '../components/shared/Heading.js';
import SoulfulOfNoise from '../images/SoufulOfNoise.jpeg';

const BuyContainer = styled.div`
--page-width: 70vw;
--max-page-width: 1200px;
`;

const BuyHeader = styled(Heading)`
width: var(--page-width);
max-width: var(--max-page-width);
`;


const PaymentContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: var(--page-width);
  max-width: var(--max-page-width);
  margin: 0 auto;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const ImageWrapper = styled.div`
  padding: 2rem;
  width: calc(400px + 4rem );
  max-width: var(--page-width);
  border-radius: 36px;
  background-color: #2e375f;
  &:hover{
    cursor: pointer;
    
  }
  
  @media (max-width: 1200px) {
    margin-right: var(--space-medium);
  }

  @media (max-width: 900px) {
    margin-right: 0;
    margin-bottom: var(--space-medium);
  }
`;


const Image = ({ src, alt }) => {
  return <img src={src} alt={alt} width={'400'} style={{maxWidth: "calc( 70vw - 4rem )"}}  onClick={() => window.open('https://soulfulofnoise.com')} />;
};

function BuyPage() {

  const [store, dispatch] = useReducer(buyPageReducer, initialBuyPageStore)

  return (
    <BuyPageContext.Provider value={{store, dispatch}}>
      <BuyContainer>
        <BuyHeader>buy BU1DL tokens:</BuyHeader>
        {/* add amount and total compnent */}
        <PaymentContainer>
          <ImageWrapper>
            <Image src={SoulfulOfNoise} alt={'SoulfulofNoise Music Festival'} />
          </ImageWrapper>
          <ChargeSummaryGrid />
        </PaymentContainer>
        <PaymentButtons />
        <TermsDisclaimer />
      </BuyContainer>
    </BuyPageContext.Provider>
  );
}

export default BuyPage;
