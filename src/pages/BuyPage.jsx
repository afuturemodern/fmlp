import { useReducer } from 'react';
import { BuyPageContext, buyPageReducer, initialBuyPageStore } from '../components/BuyPage/store'
import styled from 'styled-components';
import PaymentButtons from '../components/BuyPage/PaymentButtons.jsx';
import ChargeSummaryGrid from '../components/BuyPage/ChargeSummaryGrid.jsx';
import TermsDisclaimer from '../components/BuyPage/TermsDisclaimer';
import Heading from '../components/shared/Heading.js';
import SoulfulOfNoise from '../images/SoufulOfNoise.jpeg';

const BuyContainer = styled.div``;

const PaymentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ImageStyle = styled.div`
  padding: 2rem;
  border-radius: 36px;
  background-color: #2e375f;
  &:hover{
    cursor: pointer;
    
  }
  
`;


const Image = ({ src, alt }) => {
  return <img src={src} alt={alt} width={'400rem'} onClick={() => window.open('https://soulfulofnoise.com')} />;
};

function BuyPage() {

  const [store, dispatch] = useReducer(buyPageReducer, initialBuyPageStore)

  return (
    <BuyPageContext.Provider value={{store, dispatch}}>
      <BuyContainer>
        <Heading>buy BU1DL tokens:</Heading>
        {/* add amount and total compnent */}
        <PaymentContainer>
          <ImageStyle>
            <Image src={SoulfulOfNoise} alt={'SoulfulofNoise Music Festival'} />
          </ImageStyle>
          <ChargeSummaryGrid />
        </PaymentContainer>
        <PaymentButtons />
        <TermsDisclaimer />
      </BuyContainer>
    </BuyPageContext.Provider>
  );
}

export default BuyPage;
