import { useReducer } from 'react';
import {
  BuyPageContext,
  buyPageReducer,
  initialBuyPageStore,
} from '../components/BuyPage/store';
import styled from 'styled-components';
import PaymentButtons from '../components/BuyPage/PaymentButtons.jsx';
import ChargeSummaryGrid from '../components/BuyPage/ChargeSummaryGrid.jsx';
import TermsDisclaimer from '../components/BuyPage/TermsDisclaimer';
import Heading from '../components/shared/Heading.js';
import SoulfulOfNoise from '../images/SoufulOfNoise.jpeg';
import PaymentSuccessfulMessage from '../components/BuyPage/PaymentSuccessfulMessage';
import PaymentCanceledMessage from '../components/BuyPage/PaymentCanceledMessage';
import PaymentErrorMessage from '../components/BuyPage/PaymentErrorMessage';
import Divider from '../components/Divider/Divider';

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
  border-radius: 36px;
  background-color: #d475a5;
  width: 50%;
  margin: 0 var(--space-small);
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 900px) {
    width:100%;
    margin: 0 0 var(--space-medium);
  }
`;

const BuyImgStyle = {
  width: '100%'
};


const Image = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      style={BuyImgStyle}
      // style={{ maxWidth: 'calc( 70vw - 4rem )' }}
      onClick={() => window.open('https://soulfulofnoise.com')}
    />
  );
};

function BuyPage() {
  const [store, dispatch] = useReducer(buyPageReducer, initialBuyPageStore);

  return (
    <BuyPageContext.Provider value={{ store, dispatch }}>
      <BuyContainer>
        <BuyHeader>buy BU1DL tokens:</BuyHeader>
        {/* add amount and total compnent */}
        <PaymentContainer>
          <ImageWrapper>
            <Image src={SoulfulOfNoise} alt={'SoulfulofNoise Music Festival'} />
          </ImageWrapper>
          <ChargeSummaryGrid />
        </PaymentContainer>
        <PaymentSuccessfulMessage />
        <PaymentCanceledMessage />
        <PaymentErrorMessage />
        <PaymentButtons />
        <TermsDisclaimer />
        <Divider />
      </BuyContainer>
    </BuyPageContext.Provider>
  );
}

export default BuyPage;