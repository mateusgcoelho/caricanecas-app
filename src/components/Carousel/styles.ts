import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  margin: 0 auto;
`;

export const Content = styled.div`
  width: 100%;

  padding: 0 1rem;

  overflow-x: auto;

  display: flex;
  align-items: center;

  scroll-behavior: smooth;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  div + div {
    margin-left: 2rem;
  }
`;

export const Controllers = styled.section`
  max-width: 220px;
  margin: 0 auto;

  display: flex;
  justify-content: space-around;
  align-items: center;

  padding: 2rem 1rem;
`;

export const ButtonController = styled.button`
  height: 3.2rem;
  width: 3.2rem;

  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1rem 0;

  color: var(--primary);
  font-size: 1rem;
`;
