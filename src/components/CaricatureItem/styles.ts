import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

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
