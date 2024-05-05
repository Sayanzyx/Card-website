import { Helmet } from 'react-helmet';

import { Wrapper } from './Wrapper';

import { Paragraph } from '../components/common/Paragraph';
import { SmallTitle } from '../components/common/SmallTitle';
import { Title } from '../components/common/Title';
import { ExternalLink } from '../components/icons/ExternalLink';

export default function Contact() {
  return (
    <Wrapper forceMaxWidth>
      <Helmet>
        <title>Contato</title>
      </Helmet>

      <Title>Contate-me</Title>

      <Paragraph>
        Você pode entrar em contato comigo no meu{' '}
        <a href="https://discord.com/users/787475567259287554" target="_blank" rel="noreferrer">
          Discord <ExternalLink />
        </a>
        .
      </Paragraph>

      <br />

      <SmallTitle>Quer me contratar?</SmallTitle>

      <Paragraph>
        Tenho liberdade para ser contratado e dar o meu melhor pelo seu projeto!
      </Paragraph>

      <Paragraph>
        <a href="https://www.instagram.com/sayanzyx/" target="_blank" rel="noreferrer">
          Instagram <ExternalLink />
        </a>
        <br />
        <a href="https://twitter.com/Sayanzyx" target="_blank" rel="noreferrer">
          Twitter <ExternalLink />
        </a>
        <br />
      </Paragraph>

      <img src="/static/images/sayan.gif" alt="Sayan Fighting" />
    </Wrapper>
  );
}
