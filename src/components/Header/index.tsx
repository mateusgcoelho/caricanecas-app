import { useDispatch } from "react-redux";
import LogoCaricanecas from "../../assets/logo.png";
import { previousStepSelected } from "../../store/modules/step/actions";
import IndicatorStep from "../IndicatiorStep";
import {
  AboutPage, AboutPageContent, AboutPageTopBar, ButtonToBack, Container,
  VideoWrapper
} from "./styles";




type HeaderProps = {
  video: {
    url: string;
  };
  logoIsVisible?: boolean;
  backTo?: {
    textComponent: () => {};
  };
};

const Header: React.FC<HeaderProps> = ({
  video,
  backTo,
  logoIsVisible = true,
}) => {
  const dispatch = useDispatch();

  const handleClickToBackStep = () => {
    dispatch(previousStepSelected());
  };

  return (
    <Container>
      <VideoWrapper>
        <video autoPlay loop src={video.url} />
      </VideoWrapper>
      <AboutPage>
        {!!backTo && (
          <AboutPageTopBar>
            <ButtonToBack onClick={handleClickToBackStep}>
              {backTo.textComponent()}
            </ButtonToBack>
          </AboutPageTopBar>
        )}

        <AboutPageContent>
          {logoIsVisible && (
            <img src={LogoCaricanecas} alt="Logo Caricanecas" />
          )}
          <IndicatorStep />
        </AboutPageContent>
      </AboutPage>
    </Container>
  );
};

export default Header;
