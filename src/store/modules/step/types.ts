export enum StepEnum {
  SELECT_CARICATURE,
  SELECT_NAMES,
  SEND_IMAGES,
}

interface IStepItem {
  id: number;
  type: StepEnum;
  number: number;
}

interface IStepState {
  selected: IStepItem;
  steps: IStepItem[];
}

export type { IStepState, IStepItem };
