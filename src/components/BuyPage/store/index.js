import React from 'react';

export const initialBuyPageStore = {
  price: 50,
  // amountOptions: [50, 69],
  amountOptions: [50],
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
    default:
      return state;
  }
};
