import { ReactNode } from 'react';

import { Container } from './styles';

export function SmallTitle({ children }: { children: ReactNode }) {
  return <Container>{children}</Container>;
}
