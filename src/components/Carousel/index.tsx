import React, { FormEvent, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  Container,
  Content,
  Item,
  Controllers,
  ButtonController,
} from "./styles";

const Carousel: React.FC<any> = ({ data }) => {
  const carouselItemsRef = useRef<HTMLDivElement>(null);

  const handleLeftClick = (event: FormEvent) => {
    event.preventDefault();

    if (carouselItemsRef.current?.scrollLeft != null)
      carouselItemsRef.current.scrollLeft -=
        carouselItemsRef.current.offsetWidth;
  };

  const handleRightClick = (event: FormEvent) => {
    event.preventDefault();

    if (carouselItemsRef.current?.scrollLeft != null)
      carouselItemsRef.current.scrollLeft +=
        carouselItemsRef.current.offsetWidth;
  };

  return (
    <Container>
      <Content ref={carouselItemsRef}>
        {data.map((item: any) => (
          <Item key={item.id}>
            <h1>{item.name}</h1>
          </Item>
        ))}
      </Content>

      <Controllers>
        <ButtonController onClick={handleLeftClick}>
          <FaChevronLeft />
        </ButtonController>

        <ButtonController onClick={handleRightClick}>
          <FaChevronRight />
        </ButtonController>
      </Controllers>
    </Container>
  );
};

export default Carousel;
