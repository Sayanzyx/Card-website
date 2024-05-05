import { ReactNode } from 'react';

import { Container } from './styles';

export function Title({ children }: { children: ReactNode }) {
  return <Container>{children}</Container>;
}
