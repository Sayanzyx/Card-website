import type { ReactNode } from 'react';

import { Container } from './styles';

export function RepoList({ children }: { children?: ReactNode }) {
  return <Container>{children}</Container>;
}
