import React from 'react';

export const initialBuyPageStore = {
  amount: 50,
  // amountOptions: [50, 69],
  amountOptions: [50],
};

export const BuyPageContext = React.createContext();

export const buyPageReducer = (state, { type, payload }) => {
  switch (type) {
    case 'updateAmount': {
      return {
        ...state,
        amount: payload,
      };
    }
    default:
      return state;
  }
};
