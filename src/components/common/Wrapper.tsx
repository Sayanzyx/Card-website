import type { ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  display: flex;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: none;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export function Wrapper({ children }: { children: ReactNode }) {
  return <Container>{children}</Container>;
}
