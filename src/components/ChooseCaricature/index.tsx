import CARICATURES_DATA from "../../../caricatures-data.json";

import Carousel from "../Carousel";
import IndicatorStep from "../IndicatiorStep";
import CaricatureItem from "../CaricatureItem";

import { FaChevronLeft } from "react-icons/fa";

import {
  Content,
  Header,
  VideoWrapper,
  AboutPage,
  AboutPageTopBar,
  AboutPageContent,
  Choose,
  AboutChoose,
  ButtonToBack,
} from "./styles";

const ChooseCaricature: React.FC = () => {
  return (
    <Content>
      <Header>
        <VideoWrapper>
          <video autoPlay loop>
            <source
              src="https://www.caricanecas.com.br/videos/PROCESSO DE COMPRAv3.mp4"
              type="video/mp4"
            />
          </video>
        </VideoWrapper>

        <AboutPage>
          <AboutPageTopBar>
            <ButtonToBack to="/">
              <FaChevronLeft /> Voltar
            </ButtonToBack>
          </AboutPageTopBar>

          <AboutPageContent>
            <IndicatorStep />
          </AboutPageContent>
        </AboutPage>
      </Header>

      <Choose>
        <AboutChoose>
          <h1>Você precisa de quantas pessoas desenhadas?</h1>
        </AboutChoose>

        <Carousel data={CARICATURES_DATA} component={CaricatureItem} />
      </Choose>
    </Content>
  );
};

export default ChooseCaricature;
