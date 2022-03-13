import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  max-width: 400px;

  bottom: 0;
  right: 0;

  padding: 1rem 0.6rem;

  z-index: 1;
`;

export const Content = styled.div`
  width: 100%;
  max-width: calc(100% - 1.5rem);

  margin: 0 auto;

  background: var(--light-blue);

  display: flex;
  flex-direction: column;
  align-items: center;

  color: var(--white);

  border-radius: 0.4rem 0 0 0.4rem;
`;

export const MoreInfos = styled.div`
  width: 100%;

  padding: 1rem;

  margin-bottom: 1rem;
`;

export const InfoPrice = styled.button`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 3.8rem;
  padding: 0 1rem;

  color: var(--white);
`;

export const Total = styled.div`
  h1 {
    font-size: 1.4rem;
  }
`;

export const IconController = styled.div``;

export const ImageCaricatureItem = styled.img`
  height: 9rem;
  width: 100%;

  border-radius: 0.2rem;

  object-fit: cover;
  object-position: left bottom;
`;
