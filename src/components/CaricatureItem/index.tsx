import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../store";

import { setCaricatureItem } from "../../store/modules/cart/actions";
import { ICaricatureItem, ICartState } from "../../store/modules/cart/types";

import { Container, AboutItem } from "./styles";

type CaricatureItemProps = {
  item: ICaricatureItem;
};

const CaricatureItem: React.FC<CaricatureItemProps> = ({
  item,
}: CaricatureItemProps) => {
  const dispatch = useDispatch();

  const cart = useSelector<IState, ICartState>((state) => state.cart);

  const handleSetCaricatureItemInCart = useCallback(
    (caricature: ICaricatureItem) => {
      dispatch(setCaricatureItem(caricature));
    },
    [dispatch]
  );

  return (
    <Container
      isSelected={cart.caricature.id === item.id}
      onClick={() => handleSetCaricatureItemInCart(item)}
    >
      <img loading="lazy" src={item.photo} alt={item.name} />

      <AboutItem>
        <h1>R$ {item.price}</h1>
      </AboutItem>
    </Container>
  );
};

export default CaricatureItem;
