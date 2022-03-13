import { useSelector } from "react-redux";
import HeaderVideo from "../../assets/background.mp4";

import ChooseCaricaturePage from "../../components/ChooseCaricaturePage";
import Header from "../../components/Header";
import ModalCart from "../../components/ModalCart";
import { IState } from "../../store";
import { IStepState, StepEnum } from "../../store/modules/step/types";

import { Container } from "./styles";

const Home: React.FC = () => {
  const step = useSelector<IState, IStepState>((state) => state.step);

  return (
    <Container>
      <ModalCart />

      <Header
        video={{
          url: HeaderVideo,
        }}
      />

      {step.selected.type === StepEnum.SELECT_CARICATURE && (
        <ChooseCaricaturePage />
      )}
    </Container>
  );
};

export default Home;
