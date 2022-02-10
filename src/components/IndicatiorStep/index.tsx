import ProgressBar from "../ProgressBar";

import { Content, IndicatorCircle } from "./styles";

const IndicatorStep: React.FC = () => {
  return (
    <Content>
      <IndicatorCircle>
        <h1>1</h1>
      </IndicatorCircle>

      <h2>PASSO 1</h2>

      <ProgressBar style={{ marginTop: "2rem" }} />
    </Content>
  );
};

export default IndicatorStep;
