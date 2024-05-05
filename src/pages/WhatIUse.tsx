import { Helmet } from 'react-helmet';

import { Wrapper } from './Wrapper';

import { Paragraph } from '../components/common/Paragraph';
import { Technologie } from '../components/common/Technologie';
import { Title } from '../components/common/Title';
import { JavaScript } from '../components/icons/JavaScript';
import { MongoDB } from '../components/icons/MongoDB';
import { NodeJS } from '../components/icons/NodeJS';
import { React } from '../components/icons/React';

export default function WhatIUse() {
  return (
    <Wrapper>
      <Helmet>
        <title>O que eu uso</title>
      </Helmet>

      <Title>Tecnologias</Title>
      <Paragraph>
        Essas são as tecnologias que mais utilizo em meus projetos e também para que as utilizo.
      </Paragraph>

      <Technologie
        title="JavaScript"
        icon={<JavaScript />}
        href="https://www.javascript.com"
        iconColor="#fcdc00"
        tags={['digitando', 'performance']}
        description="Eu uso esta estrutura em grandes projetos para facilitar o trabalho em grupo."
      />

      <Technologie
        title="React"
        icon={<React />}
        href="https://reactjs.org"
        iconColor="#23272f"
        tags={['interfaces', 'web']}
        description="Eu uso esta biblioteca para criar interfaces de usuário de alta qualidade."
      />

      <Technologie
        title="Node.js"
        icon={<NodeJS />}
        href="https://nodejs.org/"
        iconColor="#417e38"
        tags={['web', 'apps']}
        description="Simplesmente incrível, um dos melhores Interpretador atuais para lidar com a criação de páginas web."
      />

      <Technologie
        title="MongoDB"
        icon={<MongoDB />}
        href="https://www.mongodb.com"
        iconColor="#00ed64"
        tags={['banco', 'dados']}
        description="Melhor banco de dados da atualidades na minha opinião"
      />
    </Wrapper>
  );
}
