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
  const [progressBarPercent, setProgressBarPercent] = useState(() => {
    // 100% - finalStepNumber
    // x - stepNumber
    console.log((stepNumber * 100) / finalStepNumber);
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
