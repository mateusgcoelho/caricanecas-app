import produce from "immer";
import { Reducer } from "redux";
import { IStepState, StepEnum } from "./types";

const INITIAL_STATE: IStepState = {
  selected: {
    id: 1,
    type: StepEnum.SELECT_CARICATURE,
    number: 1,
  },
  steps: [
    {
      id: 1,
      type: StepEnum.SELECT_CARICATURE,
      number: 1,
    },
    {
      id: 2,
      type: StepEnum.SELECT_NAMES,
      number: 2,
    },
    {
      id: 3,
      type: StepEnum.SEND_IMAGES,
      number: 3,
    },
  ],
};

const step: Reducer<IStepState> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case "PREVIOUS_STEP_SELECTED": {
        let index = draft.steps.findIndex(oldStep => oldStep.id === draft.selected.id);

        if ((index - 1) >= 0) {
          draft.selected = draft.steps[index - 1];
        }
        break;
      }
      case "NEXT_STEP_SELECTED": {
        switch (draft.selected.type) {
          case StepEnum.SELECT_CARICATURE: {
            draft.selected =
              draft.steps[
              draft.steps.findIndex(
                (stepItemDraft) =>
                  stepItemDraft.type === StepEnum.SELECT_NAMES
              )
              ];
            break;
          }
          case StepEnum.SELECT_NAMES: {
            draft.selected =
              draft.steps[
              draft.steps.findIndex(
                (stepItemDraft) => stepItemDraft.type === StepEnum.SEND_IMAGES
              )
              ];
            break;
          }
          default: {
            return draft;
          }
        }
        break;
      }
      default: {
        return draft;
      }
    }
  });
};

export default step;
