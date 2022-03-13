import { useState } from "react";
import { useSelector } from "react-redux";

import { IState } from "../../store";
import { ICartState } from "../../store/modules/cart/types";

import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import { Content as ContentGlobal } from "../../styles/GlobalStyles";

import {
  Container,
  Content,
  MoreInfos,
  InfoPrice,
  Total,
  IconController,
} from "./styles";

const ModalCart: React.FC = () => {
  const [moreDetailsIsOpen, setMoreDetailsIsOpen] = useState(false);

  const cart = useSelector<IState, ICartState>((state) => state.cart);

  const isVisible = Object.keys(cart.caricature).length !== 0;

  const handleOpenMoreDetails = () => {
    setMoreDetailsIsOpen(!moreDetailsIsOpen);
  };

  if (!isVisible) return null;

  return (
    <Container>
      <ContentGlobal
        style={{
          maxWidth: "400px",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <Content>
          {moreDetailsIsOpen && (
            <MoreInfos>
              <p>{cart.caricature.name}</p>
            </MoreInfos>
          )}

          <InfoPrice onClick={handleOpenMoreDetails}>
            <Total>
              <h1>Total: R$ {cart.caricature.price}</h1>
            </Total>

            <IconController>
              {moreDetailsIsOpen ? (
                <FiChevronDown color="white" size={20} />
              ) : (
                <FiChevronUp color="white" size={20} />
              )}
            </IconController>
          </InfoPrice>
        </Content>
      </ContentGlobal>
    </Container>
  );
};

export default ModalCart;
