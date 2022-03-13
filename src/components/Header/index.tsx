import LogoCaricanecas from "../../assets/logo.png";

import IndicatorStep from "../IndicatiorStep";

import { Content } from "../../styles/GlobalStyles";

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
  logoIsVisible?: boolean;
  navigationTo?: {
    textComponent: () => {};
    path: string;
  };
};

const Header: React.FC<HeaderProps> = ({
  video,
  navigationTo,
  logoIsVisible = true,
}) => {
  return (
    <Container>
      <VideoWrapper>
        {/* <video autoPlay loop src={video.url} /> */}
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
