import {useContext} from 'react'
import styled from 'styled-components';
import Paragraph from '../shared/Paragraph';
import { BuyPageContext } from './store';


const PaymentCanceledMessage = () => {

  // eslint-disable-next-line no-unused-vars
  const {store, dispatch} = useContext(BuyPageContext);

  const StyledParagraph = styled(Paragraph)`
  text-align: center;
  font-weight: 700;
  display: ${store.isPaymentCanceled ? 'block' : 'none'};
  `;


  return (
    <>
      <StyledParagraph>
        payment canceled.
      </StyledParagraph>
    </>
  );
};

export default PaymentCanceledMessage;
