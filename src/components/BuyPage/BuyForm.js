import { PayPalScriptProvider, PayPalButtons, FUNDING } from "@paypal/react-paypal-js";



const PAYPAL_CLIENT_ID = "AWdHpI51fVvKquVN3KDB6wi-S_ad7Hm-eElY6tAJbCwlSDKoW7tOtZI1q8z8wW7isA_AuRimSoimd-12";

const paypay_button_style = {
  color: "blue",
  shape: "pill",
 }

const paypal_options = {
  "client-id": PAYPAL_CLIENT_ID,
  currency: "USD",
  intent: "capture",
};

const paypal_container_style = {
  margin: 40,
};

const BuyForm = () => {
  return (
    <PayPalScriptProvider options={paypal_options}>
        <div style={paypal_container_style}>
            <PayPalButtons
                style={paypay_button_style}
                fundingSource={FUNDING.PAYPAL}
            />
        </div>
    </PayPalScriptProvider>
  );
};

export default BuyForm;
