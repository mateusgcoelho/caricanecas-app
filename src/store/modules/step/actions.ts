const nextStepSelected = () => {
  return {
    type: "NEXT_STEP_SELECTED",
    payload: {},
  };
};

const previousStepSelected = () => {
  return {
    type: "PREVIOUS_STEP_SELECTED",
    payload: {},
  };
};

export { previousStepSelected, nextStepSelected };

