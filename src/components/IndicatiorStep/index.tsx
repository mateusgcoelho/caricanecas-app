import { useState } from "react";
import ProgressBar from "../ProgressBar";

import { Content, IndicatorCircle } from "./styles";

type IndicatorStepProps = {
  stepNumber: number;
  finalStepNumber: number;
};

const IndicatorStep: React.FC<IndicatorStepProps> = ({
  stepNumber,
  finalStepNumber,
}) => {
  const [progressBarPercent, _] = useState(() => {
    return (stepNumber * 100) / finalStepNumber;
  });

  return (
    <Content>
      <IndicatorCircle>
        <h1>{stepNumber}</h1>
      </IndicatorCircle>

      <h2>PASSO {stepNumber}</h2>

      <ProgressBar
        percentCompleted={progressBarPercent}
        style={{ marginTop: "2rem" }}
      />
    </Content>
  );
};

export default IndicatorStep;
