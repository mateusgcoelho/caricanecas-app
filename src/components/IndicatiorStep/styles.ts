import styled from "styled-components";

export const Content = styled.article`
  width: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;

  h2 {
    margin-top: 1rem;
  }
`;

export const IndicatorCircle = styled.div`
  height: 9rem;
  width: 9rem;

  border-radius: 50%;

  border: 6px solid var(--green);

  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 6rem;
    font-weight: 900;

    margin-top: -0.9rem;
  }
`;
