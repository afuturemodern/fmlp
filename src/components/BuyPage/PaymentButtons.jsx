import styled from 'styled-components';
import {
  PayPalScriptProvider,
  PayPalButtons,
  FUNDING,
} from '@paypal/react-paypal-js';
import { useContext } from 'react';
import { BuyPageContext } from './store';

const paypal_button_style = {
  color: 'blue',
  shape: 'pill',
};
const card_button_style = {
  color: 'black',
  shape: 'pill',
};

const paypal_options = {
  'client-id': 'AWdHpI51fVvKquVN3KDB6wi-S_ad7Hm-eElY6tAJbCwlSDKoW7tOtZI1q8z8wW7isA_AuRimSoimd-12',
  currency: 'USD',
  intent: 'capture',
};

const PaypalContainerStyle = styled.div`
flex-grow:1;
margin: 0 var(--space-small);
@media (max-width: 600px) {
  margin: var(--space-small) 0;
}
`;
const CardContainerStyle = styled.div`
flex-grow: 1;
margin: 0 var(--space-small);

@media (max-width: 600px) {
  margin: var(--space-small) 0;
}
`;

const Container = styled.div`
  display: flex;
  line-height: 1.5rem;
  font-size: 1.3rem;
  width: 70vw;
  max-width: 1200px;
  margin: 3rem auto;

  @media (max-width: 600px) {
    flex-direction: column;
    margin: 1rem auto;
  }
`;


//function that does somethiing after successful transaction

const PaymentButtons = () => {
  const {dispatch} = useContext(BuyPageContext);
  
  const handleApprove = () => {
    dispatch({type: 'updateIsPaymentSuccessful'})
  }
  const handleCancel = () => {
    dispatch({type: 'updateIsPaymentCanceled'})
  }
  const handleError = () => {
    dispatch({type: 'updateIsPaymentError'})
  }
  
  
  const handleCreateOrder = (data, actions) => actions.order.create({
    purchase_units: [
      { amount: {value: '0.01'}}
    ],
  })

  return (

    
    <Container>
      <PayPalScriptProvider options={paypal_options}>
        <PaypalContainerStyle>
          <PayPalButtons
            style={paypal_button_style}
            fundingSource={FUNDING.PAYPAL}
            createOrder={handleCreateOrder}
            onApprove={handleApprove}
            onCancel={handleCancel}
            onError={handleError}
          />
        </PaypalContainerStyle>

        <CardContainerStyle>
          <PayPalButtons
            style={card_button_style}
            fundingSource={FUNDING.CARD}
            createOrder={handleCreateOrder}
            onApprove={handleApprove}
          />
        </CardContainerStyle>
      </PayPalScriptProvider>
    </Container>
    
  );
};

export default PaymentButtons;
