import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  width: 100%;
  height: 220px;

  margin: 0 auto;
`;

export const Content = styled.div`
  width: 100%;
  margin: 0 auto;

  padding: 0 1rem;

  overflow-x: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  scroll-behavior: smooth;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  button + button {
    margin-left: 2rem;
  }
`;

export const Controllers = styled.section`
  position: absolute;
  top: 56px;
  left: 0;
  right: 0;

  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonController = styled.button`
  height: 3.2rem;
  width: 3.2rem;

  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1rem 0;

  color: var(--light-blue);
  font-size: 1rem;
`;
