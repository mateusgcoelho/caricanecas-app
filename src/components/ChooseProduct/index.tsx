import Carousel from "../Carousel";
import IndicatorStep from "../IndicatiorStep";

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

const ChooseProduct: React.FC = () => {
  const products = [
    {
      id: 1,
      name: "Caneca Jateada",
      price: 20,
    },
    {
      id: 2,
      name: "Caneca Jateada 2",
      price: 20,
    },
    {
      id: 3,
      name: "Caneca Jateada 3",
      price: 20,
    },
    {
      id: 4,
      name: "Caneca Jateada 4",
      price: 20,
    },
    {
      id: 5,
      name: "Caneca Jateada 5",
      price: 20,
    },
    {
      id: 6,
      name: "Caneca Jateada 6",
      price: 20,
    },
  ];

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

        <Carousel data={products} />
      </Choose>
    </Content>
  );
};

export default ChooseProduct;
