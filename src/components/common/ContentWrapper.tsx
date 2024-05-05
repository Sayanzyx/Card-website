import type { ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 15rem;
  padding: 2rem;
  box-sizing: border-box;
  font-size: 1rem;

  @media (max-width: 768px) {
    margin-left: 0;
    padding-top: calc(64px + 2rem);
    height: calc(100% - 64px);
  }
`;

export function ContentWrapper({ children }: { children: ReactNode }) {
  return <Container>{children}</Container>;
}
