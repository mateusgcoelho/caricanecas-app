import styled from "styled-components";

import { lighten } from "polished";

export const Container = styled.div`
  width: 100%;

  height: 0.4rem;

  background: ${lighten(0.3, "#a8c828")};
`;

export const Completed = styled.div`
  width: 2rem;
  height: 100%;

  background: var(--green);
`;
