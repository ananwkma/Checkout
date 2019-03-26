import { RECEIVE_DATA, TRY_PROMO } from "../actions";

export default function pricing(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DATA:
      let pricing = {
        subtotal: action.pricing.subtotal,
        savings: action.pricing.savings,
        tax: action.pricing.tax,
        total: action.pricing.total,
        zip: action.pricing.zip,
        discount: 0
      };
      return pricing;
    case TRY_PROMO:
      if (action.text.toUpperCase() === "DISCOUNT") {
        return {
          ...state,
          discount: 10
        };
      } else return state;
    default:
      return state;
  }
}
