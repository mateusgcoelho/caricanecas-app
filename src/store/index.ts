import { createStore } from "redux";

import { ICartState } from "./modules/cart/types";
import { IStepState } from "./modules/step/types";

import rootReducer from "./modules/rootReducer";

export interface IState {
  cart: ICartState;
  step: IStepState;
}

const store = createStore(rootReducer);

export default store;
