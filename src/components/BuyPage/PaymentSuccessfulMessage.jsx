import {useContext, useEffect} from 'react'
import styled from 'styled-components';
import Paragraph from '../shared/Paragraph';
import { BuyPageContext } from './store';


const PaymentSuccessfulMessage = () => {

  // eslint-disable-next-line no-unused-vars
  const {store, dispatch} = useContext(BuyPageContext);

  const StyledParagraph = styled(Paragraph)`
  text-align: center;
  color: #01734A;
  font-weight: 700;
  display: ${store.isPaymentSuccessful ? 'block' : 'none'};
  `;

  useEffect(() => {
    if(store.isPaymentSuccessful) 
    setTimeout(() => dispatch({type: 'updateIsPaymentSuccessful'}) ,5000)
    
  }, [store.isPaymentSuccessful, dispatch])


  return (
    <>
      <StyledParagraph>
        payment successful!
      </StyledParagraph>
    </>
  );
};

export default PaymentSuccessfulMessage;
