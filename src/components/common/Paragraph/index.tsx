import { ReactNode } from 'react';

import { Container } from './styles';

export function Paragraph({ children }: { children?: ReactNode }) {
  return <Container>{children}</Container>;
}
