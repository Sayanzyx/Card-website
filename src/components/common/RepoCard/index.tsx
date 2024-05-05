import { useCallback } from 'react';

import { ExternalLink } from '../../icons/ExternalLink';

import {
  Container,
  RepoDate,
  RepoDescription,
  RepoFooter,
  RepoHeader,
  RepoInfo,
  RepoInfoCounter,
  RepoName,
} from './styles';

interface Props {
  name: string;
  url: string;
  description?: string;
  createdAt: string;
  forks: number;
  stars: number;
  watchers: number;
}

export function RepoCard({ name, url, description, createdAt, forks, stars, watchers }: Props) {
  const handleOpenRepository = useCallback(() => {
    window.open(url, '_blank');
  }, [url]);

  return (
    <Container
      transition={{
        duration: 0.2,
      }}
      whileHover={{
        background: [
          'linear-gradient(70deg, transparent 100%, rgba(255, 255, 255, .03) 110%, transparent 120%',
          'linear-gradient(70deg, transparent 40%, rgba(255, 255, 255, .03) 50%, transparent 60%',
        ],
      }}
      onClick={handleOpenRepository}
    >
      <RepoHeader>
        <RepoName>
          {name} <ExternalLink />
        </RepoName>
        {description && <RepoDescription>{description}</RepoDescription>}
      </RepoHeader>
      <RepoFooter>
        <RepoDate>{createdAt}</RepoDate>
        <RepoInfo>
          <RepoInfoCounter>🧲 {forks}</RepoInfoCounter>
          <RepoInfoCounter>👀 {watchers}</RepoInfoCounter>
          <RepoInfoCounter>⭐ {stars}</RepoInfoCounter>
        </RepoInfo>
      </RepoFooter>
    </Container>
  );
}
