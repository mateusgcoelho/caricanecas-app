import IndicatorStep from "../IndicatiorStep";

import {
  Container,
  VideoWrapper,
  AboutPage,
  AboutPageTopBar,
  AboutPageContent,
  ButtonToBack,
} from "./styles";

type HeaderProps = {
  video: {
    url: string;
  };
  navigationTo?: {
    textComponent: () => {};
    path: string;
  };
};

const Header: React.FC<HeaderProps> = ({ video, navigationTo }) => {
  return (
    <Container>
      <VideoWrapper>
        <video autoPlay loop>
          <source src={video.url} type="video/mp4" />
        </video>
      </VideoWrapper>

      <AboutPage>
        {!!navigationTo && (
          <AboutPageTopBar>
            <ButtonToBack to={navigationTo.path}>
              {navigationTo.textComponent()}
            </ButtonToBack>
          </AboutPageTopBar>
        )}

        <AboutPageContent>
          <IndicatorStep stepNumber={1} finalStepNumber={2} />
        </AboutPageContent>
      </AboutPage>
    </Container>
  );
};

export default Header;
