import Tooltip from '@tippyjs/react';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { BIRTH_DATE } from '../utils/constants';
import { Wrapper } from './Wrapper';

import { Paragraph } from '../components/common/Paragraph';
import { SmallTitle } from '../components/common/SmallTitle';
import { Title } from '../components/common/Title';
import { ExternalLink } from '../components/icons/ExternalLink';

const YEAR_MS = 31556926000;

export default function Home() {
  const [birthDayCountdown, setBirthDayCountdown] = useState(() => {
    const birthTime = BIRTH_DATE.getTime() % YEAR_MS;
    const nowTime = Date.now() % YEAR_MS;

    return nowTime > birthTime ? birthTime + YEAR_MS - nowTime : birthTime - nowTime;
  });

  const myAge = useMemo(() => Math.floor((Date.now() - BIRTH_DATE.getTime()) / YEAR_MS), []);

  const formatAgeCountdown = useCallback(() => {
    if (YEAR_MS - birthDayCountdown <= 86400000) {
      return 'Feliz Aniversário Bernardo! 🎉';
    }

    let seconds = Math.floor(birthDayCountdown / 1000);

    const days = Math.floor(seconds / 86400);
    seconds %= 86400;

    const hours = Math.floor(seconds / 3600);
    seconds %= 3600;

    const minutes = Math.floor(seconds / 60);
    seconds %= 60;

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }, [birthDayCountdown]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBirthDayCountdown((state) => (state - 1000 <= 0 ? YEAR_MS : state - 1000));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Wrapper forceMaxWidth>
      <Title>Olá🤠</Title>

      <Paragraph>
        Olá, sou Bernardo, mais conhecido como <strong>&quot;Sayan&quot;</strong> nas minhas redes
        sociais e pelos meus amigos.
      </Paragraph>

      <Paragraph>
        Eu tenho{' '}
        <Tooltip content={formatAgeCountdown()} theme="custom-tooltip" arrow>
          <strong>{myAge}</strong>
        </Tooltip>{' '}
        anos e sou um entusiasta na tecnologia, sempre procurando aprender o máximo possível com
        novas funcionalidades e novas tecnologias.
      </Paragraph>

      <Paragraph>
        No meu tempo livre gosto muito de ouvir músicas da minha{' '}
        <a
          href="https://open.spotify.com/playlist/0XSwoGL9E4c1AssW5SYiNt?si=29b0728603694ada"
          target="_blank"
          rel="noreferrer"
        >
          playlist <ExternalLink />
        </a>{' '}
        e jogar jogos como Valorant, CSGO e outros...
      </Paragraph>

      <br />

      <SmallTitle>Como comecei a programar</SmallTitle>

      <Paragraph>
        Comecei a programar no final de <strong>2022</strong> com <span>JS</span>
      </Paragraph>

      <Paragraph>
        Em <strong>2022</strong> Comecei minha jornada com <span>Javascript</span> usando o{' '}
        <strong>Node.js</strong>, inicialmente fiz bots para Discord, um tempo depois no final de
        2023 comecei a fazer sites usando HTML, CSS e JS.
      </Paragraph>
    </Wrapper>
  );
}
