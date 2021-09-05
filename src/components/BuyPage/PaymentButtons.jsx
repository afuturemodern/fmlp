import styled from 'styled-components';
import {
  PayPalScriptProvider,
  PayPalButtons,
  FUNDING,
} from '@paypal/react-paypal-js';

const PAYPAL_CLIENT_ID =
  'AWdHpI51fVvKquVN3KDB6wi-S_ad7Hm-eElY6tAJbCwlSDKoW7tOtZI1q8z8wW7isA_AuRimSoimd-12';

const paypal_button_style = {
  color: 'blue',
  shape: 'pill',
};
const card_button_style = {
  color: 'black',
  shape: 'pill',
};

const paypal_options = {
  'client-id': PAYPAL_CLIENT_ID,
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
margin: 0 var(--space-tiny);

@media (max-width: 600px) {
  margin: var(--space-tiny) 0;
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

const PaymentButtons = () => {
  return (
    
    <Container>
      <PayPalScriptProvider options={paypal_options}>
        <PaypalContainerStyle>
          <PayPalButtons
            style={paypal_button_style}
            fundingSource={FUNDING.PAYPAL}
          />
        </PaypalContainerStyle>

        <CardContainerStyle>
          <PayPalButtons
            style={card_button_style}
            fundingSource={FUNDING.CARD}
          />
        </CardContainerStyle>
      </PayPalScriptProvider>
    </Container>
    
  );
};

export default PaymentButtons;
