import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IState } from "../../store";
import { IStepItem, IStepState } from "../../store/modules/step/types";
import ProgressBar from "../ProgressBar";

import { Content, IndicatorCircle } from "./styles";

const IndicatorStep: React.FC = () => {
  const step = useSelector<IState, IStepState>((state) => state.step);

  return (
    <Content>
      <IndicatorCircle>
        <h1>{step.selected.number}</h1>
      </IndicatorCircle>

      <h2>PASSO {step.selected.number}</h2>

      <ProgressBar
        percentCompleted={(step.selected.number * 100) / step.steps.length}
        style={{ marginTop: "2rem" }}
      />
    </Content>
  );
};

export default IndicatorStep;
