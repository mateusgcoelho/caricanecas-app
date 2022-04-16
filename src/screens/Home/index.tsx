import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import HeaderVideo from "../../assets/background.mp4";
import ChooseCaricaturePage from "../../components/ChooseCaricaturePage";
import ChooseNamePage from "../../components/ChooseNamePage";
import Header from "../../components/Header";
import ModalCart from "../../components/ModalCart";
import { IState } from "../../store";
import { IStepState, StepEnum } from "../../store/modules/step/types";
import { Container } from "./styles";

const renderSwitchPagesStates = (step: StepEnum) => {
  switch (step) {
    case StepEnum.SELECT_CARICATURE:
      return <ChooseCaricaturePage />;
    case StepEnum.SELECT_NAMES:
      return <ChooseNamePage />;
    case StepEnum.SEND_IMAGES:
      return;
  }
}

const Home: React.FC = () => {
  const refContainerScroll = useRef<any>(null);
  const step = useSelector<IState, IStepState>((state) => state.step);

  useEffect(() => {
    refContainerScroll.current.scrollIntoView({ block: "start", behavior: "smooth" });
  }, [step]);

  return (
    <Container ref={refContainerScroll}>
      <ModalCart />

      <Header
        backTo={step.selected.id > 1 ? {
          textComponent: () => <p>Voltar</p>,
        } : undefined}
        video={{
          url: HeaderVideo,
        }}
      />

      {renderSwitchPagesStates(step.selected.type)}
    </Container>
  );
};

export default Home;
