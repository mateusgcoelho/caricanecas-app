import { ICaricatureItem, IProduct } from "./types";

const addProductToCart = (product: IProduct) => {
  return {
    type: "ADD_PRODUCT_TO_CART",
    payload: {
      product,
    },
  };
};

const setCaricatureItem = (caricature: ICaricatureItem) => {
  return {
    type: "SET_CARICATURE_ITEM",
    payload: {
      caricature,
    },
  };
};

export { addProductToCart, setCaricatureItem };
