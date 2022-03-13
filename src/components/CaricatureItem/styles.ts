import styled from "styled-components";

type ContainerProps = {
  isSelected?: boolean;
};

export const Container = styled.button<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  opacity: ${({ isSelected }) => (isSelected ? 1 : 0.7)};

  img {
    height: 10rem;
    width: 13rem;

    border-radius: 0.5rem;

    object-fit: cover;
  }
`;

export const AboutItem = styled.div`
  margin-top: 1rem;

  h1 {
    font-size: 1.4rem;
  }
`;
