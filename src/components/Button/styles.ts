import styled from "styled-components";

import { lighten } from "polished";

export const Container = styled.button`
  background: var(--primary);
  color: var(--white);

  width: 200px;
  height: 3.4rem;

  font-size: 1rem;
  font-weight: bold;

  border-radius: 0.3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;

  transition: all 0.2s;

  :disabled {
    background: ${lighten(0.2, "#a8c828")};
  }

  svg {
    margin-left: 0.3rem;
  }
`;
