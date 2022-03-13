import { Link } from "react-router-dom";

import styled from "styled-components";

export const Container = styled.header`
  position: relative;

  width: 100%;

  height: 26rem;
`;

export const VideoWrapper = styled.section`
  width: 100%;
  background: var(--light);

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
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

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

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 240px;
    margin: 2rem auto;
    margin-bottom: 3rem;
  }
`;

export const ButtonToBack = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
