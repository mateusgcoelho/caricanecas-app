import styled from "styled-components";


export const Container = styled.header`
  position: relative;

  width: 100%;

  height: 28rem;
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
  align-items: center;

  color: var(--white);
`;

export const AboutPageTopBar = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1rem 0;
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
  }
`;

export const ButtonToBack = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--white);

  font-size: 1.2rem;

`;

