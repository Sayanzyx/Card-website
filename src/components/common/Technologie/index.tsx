import { ReactNode } from 'react';

import { ExternalLink } from '../../icons/ExternalLink';

import {
  Container,
  Content,
  TechDescription,
  TechIcon,
  TechTags,
  TechTitle,
  Wrapper,
} from './styles';

interface Props {
  href?: string;
  icon: ReactNode;
  iconColor?: string;
  title: string;
  tags?: string[];
  description: string;
}

export function Technologie({ href, icon, iconColor, title, tags, description }: Props) {
  return (
    <Wrapper href={href} target="_blank">
      <Container>
        <TechIcon color={iconColor}>{icon}</TechIcon>
        <Content>
          <TechTitle>
            {title} <ExternalLink />
          </TechTitle>
          {tags && tags.length > 0 && <TechTags>{tags.join(', ')}</TechTags>}
          <TechDescription>{description}</TechDescription>
        </Content>
      </Container>
    </Wrapper>
  );
}
