import React from "react";

import { CARICATURES_DATA } from "../../data/CaricaturesData";

import Carousel from "../Carousel";
import CaricatureItem from "../CaricatureItem";
import SizedBox from "../SizedBox";

import { AboutChoose } from "./styles";
import { Content } from "../../styles/GlobalStyles";
import Button from "../Button";
import { FiChevronRight } from "react-icons/fi";
import { IState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { ICartState } from "../../store/modules/cart/types";
import { nextStepSelected } from "../../store/modules/step/actions";

const ChooseCaricaturePage: React.FC = () => {
  const dispatch = useDispatch();

  const cart = useSelector<IState, ICartState>((state) => state.cart);

  const isEnabled = Object.keys(cart.caricature).length === 0;

  const nextStep = () => {
    dispatch(nextStepSelected());
  };

  return (
    <Content>
      <AboutChoose>
        <h1>Você precisa de quantas pessoas desenhadas?</h1>

        <p>
          Sim, seu Pet também conta como uma pessoa. Ele é gente também, né?
        </p>
      </AboutChoose>

      <SizedBox />

      <Carousel data={CARICATURES_DATA} component={CaricatureItem} />

      <Content
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "2rem auto",
          marginBottom: "6.5rem",
        }}
      >
        <Button onClick={nextStep} disabled={isEnabled}>
          <span>PRÓXIMO</span>
          <FiChevronRight />
        </Button>
      </Content>

      <SizedBox />
    </Content>
  );
};

export default ChooseCaricaturePage;
