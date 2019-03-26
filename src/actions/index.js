import { getPricingData } from "../API";
export const RECEIVE_DATA = "RECEIVE_DATA";
export const TRY_PROMO = "TRY_PROMO";

export function handleReceiveData() {
  return dispatch => {
    return getPricingData().then(result => {
      dispatch(receiveDataAction(result.pricing, result.itemDetails));
    });
  };
}

export function tryPromo(text) {
  return {
    type: TRY_PROMO,
    text: text
  };
}

function receiveDataAction(pricing, itemDetails) {
  return {
    type: RECEIVE_DATA,
    pricing: pricing,
    itemDetails: itemDetails
  };
}
