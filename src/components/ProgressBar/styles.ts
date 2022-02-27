import styled from "styled-components";

import { lighten } from "polished";

export const Container = styled.div`
  width: 100%;

  height: 0.4rem;

  background: ${lighten(0.3, "#a8c828")};
`;

type CompletedProps = {
  percentCompleted: number;
};

export const Completed = styled.div<CompletedProps>`
  width: ${(props) => props.percentCompleted}%;
  height: 100%;

  background: var(--primary);
`;
