import { IStepItem } from "./types";

const nextStepSelected = () => {
  return {
    type: "NEXT_STEP_SELECTED",
    payload: {},
  };
};

export { nextStepSelected };
