import { Link } from "react-router-dom";

import styled from "styled-components";

export const Content = styled.article``;

export const Choose = styled.section`
  width: 100%;
`;

export const AboutChoose = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  padding: 2rem 1rem;

  h1 {
    font-size: 1.6rem;
  }
`;

export const ButtonToBack = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
