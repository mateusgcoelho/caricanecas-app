import { Link } from "react-router-dom";

import styled from "styled-components";

export const Content = styled.article``;

export const Header = styled.header`
  position: relative;

  width: 100%;

  height: 26rem;
`;

export const VideoWrapper = styled.section`
  width: 100%;

  position: absolute;
  top: 0;

  z-index: 0;

  height: 100%;

  video {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }
`;

export const AboutPage = styled.section`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;

  height: 100%;

  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  color: var(--white);
`;

export const AboutPageTopBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AboutPageContent = styled.div`
  width: 100%;

  padding: 0 2rem;
`;

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
