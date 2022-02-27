import CARICATURES_DATA from "../../../caricatures-data.json";

import Carousel from "../Carousel";
import CaricatureItem from "../CaricatureItem";
import SizedBox from "../SizedBox";
import Header from "../Header";

import { Content, Choose, AboutChoose } from "./styles";

const ChooseCaricaturePage: React.FC = () => {
  return (
    <Content>
      <Header
        video={{
          url: "https://www.caricanecas.com.br/videos/PROCESSO DE COMPRAv3.mp4",
        }}
      />

      <Choose>
        <AboutChoose>
          <h1>Você precisa de quantas pessoas desenhadas?</h1>
        </AboutChoose>

        <SizedBox />

        <Carousel data={CARICATURES_DATA} component={CaricatureItem} />

        <SizedBox />
      </Choose>
    </Content>
  );
};

export default ChooseCaricaturePage;
