import { RECEIVE_DATA } from "../actions";

export default function item(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DATA:
      let item = {
        item_name: action.itemDetails.item_name,
        quantity: action.itemDetails.quantity,
        img: action.itemDetails.img,
        price: action.itemDetails.price
      };
      return item;
    default:
      return state;
  }
}
