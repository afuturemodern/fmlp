import {useContext} from 'react'
import styled from 'styled-components';
import Paragraph from '../shared/Paragraph';
import { BuyPageContext } from './store';


const PaymentErrorMessage = () => {

  // eslint-disable-next-line no-unused-vars
  const {store, dispatch} = useContext(BuyPageContext);

  const StyledParagraph = styled(Paragraph)`
  text-align: center;
  color: red;
  font-weight: 700;
  display: ${store.isPaymentError ? 'block' : 'none'};
  `;


  return (
    <>
      <StyledParagraph>
        payment error. please refresh and try again.
      </StyledParagraph>
    </>
  );
};

export default PaymentErrorMessage;
