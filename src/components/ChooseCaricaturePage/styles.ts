import { Link } from "react-router-dom";

import styled from "styled-components";

export const Container = styled.article`
  padding-bottom: 4rem;
`;

export const AboutChoose = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  padding: 2rem 0.7rem;

  h1 {
    font-size: 1.6rem;
  }

  p {
    margin-top: 0.5rem;

    color: var(--gray);
  }
`;

export const ButtonToBack = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
