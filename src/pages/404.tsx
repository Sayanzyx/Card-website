import { Helmet } from 'react-helmet';

import { Wrapper } from './Wrapper';

import { Paragraph } from '../components/common/Paragraph';
import { Title } from '../components/common/Title';

export default function NotFound() {
  return (
    <Wrapper forceMaxWidth>
      <Helmet>
        <title>404 Not Found</title>
      </Helmet>

      <Title>404 Not Found</Title>

      <Paragraph>The page you&apos;re looking for was not found.</Paragraph>
    </Wrapper>
  );
}
