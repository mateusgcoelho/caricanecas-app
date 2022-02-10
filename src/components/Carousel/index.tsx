import React, { FormEvent, useRef } from "react";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { Container, Content, Controllers, ButtonController } from "./styles";

interface CarouselProps {
  data: any;
  component: React.FC<any>;
}

const Carousel: React.FC<CarouselProps> = ({
  data,
  component: Component,
  ...props
}: CarouselProps) => {
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
    <Container {...props}>
      <Content ref={carouselItemsRef}>
        {data.map((item: any) => (
          <Component item={item} key={item.id}>
            <h1>{item.name}</h1>
          </Component>
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
