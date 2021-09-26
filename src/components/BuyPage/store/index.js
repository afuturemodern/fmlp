import React from 'react';

export const initialBuyPageStore = {
  price: 50,
  // amountOptions: [50, 69],
  amountOptions: [50],
  isPaymentSuccessful: false,
  isPaymentCanceled: false,
  isPaymentError: false,
};

export const BuyPageContext = React.createContext();

export const buyPageReducer = (state, { type, payload }) => {
  switch (type) {
    case 'updateAmount': {
      return {
        ...state,
        price: payload,
      };
    }
    case 'updateIsPaymentSuccessful': {
      return {
        ...state,
        isPaymentSuccessful: !state.isPaymentSuccessful,
      };
    }
    case 'updateIsPaymentCanceled': {
      return {
        ...state,
        isPaymentSuccessful: !state.isPaymentCanceled,
      };
    }
    case 'updateIsPaymentError': {
      return {
        ...state,
        isPaymentSuccessful: !state.isPaymentError,
      };
    }
    default:
      return state;
  }
};
