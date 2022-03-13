import { Reducer } from "redux";

import produce from "immer";

import { ICaricatureItem, ICartItem, ICartState } from "./types";

const INITIAL_STATE: ICartState = {
  caricature: {} as ICaricatureItem,
  items: [] as ICartItem[],
};

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case "ADD_PRODUCT_TO_CART": {
        const { product } = action.payload;

        const productInCartIndex = draft.items.findIndex(
          (item: ICartItem) => item.product.id === product.id
        );

        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantity++;
        } else {
          draft.items.push({
            product,
            quantity: 1,
          });
        }

        break;
      }
      case "SET_CARICATURE_ITEM": {
        const { caricature } = action.payload;

        draft.caricature = caricature;

        break;
      }
      default: {
        return draft;
      }
    }
  });
};

export default cart;
