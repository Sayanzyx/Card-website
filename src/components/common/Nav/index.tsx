import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanyardWs } from 'use-lanyard';
import useSound from 'use-sound';

import { StatusColor, StatusName } from '../../../utils/constants';
import { Github } from '../../icons/Github';
import { Instagram } from '../../icons/Instagram';
import { KonohaSing } from '../../icons/KonohaSign';
import { MobileMenu } from '../../icons/MobileMenu';
import { Twitter } from '../../icons/Twitter';
import { XMark } from '../../icons/XMark';
import { Presence } from '../Presence';

import {
  Container,
  CopyRight,
  Header,
  Icon,
  Menu,
  MobileHeader,
  MobileMenuIcon,
  Page,
  Social,
  SocialIcon,
  Status,
  StatusCircle,
  Title,
} from './styles';

const iconVariants = {
  init: {
    scale: 2,
    opacity: 0,
  },
  in: {
    scale: 1,
    opacity: 1,
  },
};

function ActiveIcon() {
  return (
    <Icon
      initial="init"
      animate="in"
      exit="out"
      variants={iconVariants}
      transition={{ duration: 0.15 }}
    >
      <KonohaSing />
    </Icon>
  );
}

export function Nav() {
  const { pathname } = useLocation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const presence = useLanyardWs('787475567259287554');
  const [playSwitchPageSound] = useSound('/static/sounds/Som.mp3', { volume: 0.5 });

  useEffect(() => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }

    playSwitchPageSound();
  }, [pathname]);

  function toggleMobileMenu() {
    setMobileMenuOpen((state) => !state);
  }

  return (
    <>
      <MobileHeader open={mobileMenuOpen}>
        <Title>Bernardo Murta</Title>
        <MobileMenuIcon onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <XMark /> : <MobileMenu />}
        </MobileMenuIcon>
      </MobileHeader>
      <Container open={mobileMenuOpen}>
        <Header>
          <Title>{mobileMenuOpen ? 'Eu estou atualmente' : 'Bernardo Murta'}</Title>
          <Status>
            <StatusCircle
              color={
                StatusColor[(presence?.discord_status as keyof typeof StatusColor) || 'offline']
              }
            />
            {StatusName[(presence?.discord_status as keyof typeof StatusName) || 'offline']}
          </Status>
        </Header>
        <Menu>
          <Page to="/" active={pathname === '/' ? 1 : 0}>
            Sobre mim
            {pathname === '/' && <ActiveIcon />}
          </Page>
          <Page to="/what" active={pathname === '/what' ? 1 : 0}>
            O que eu uso
            {pathname === '/what' && <ActiveIcon />}
          </Page>
          <Page to="/repos" active={pathname === '/repos' ? 1 : 0}>
            Repositórios
            {pathname === '/repos' && <ActiveIcon />}
          </Page>
          <Page to="/contact" active={pathname === '/contact' ? 1 : 0}>
            Contato
            {pathname === '/contact' && <ActiveIcon />}
          </Page>
        </Menu>
        <Social>
          <SocialIcon href="https://twitter.com/Sayanzyx" target="_blank">
            <Twitter />
          </SocialIcon>
          <SocialIcon href="https://github.com/Sayanzyx" target="_blank">
            <Github />
          </SocialIcon>
          <SocialIcon href="https://www.instagram.com/sayanzyx/" target="_blank">
            <Instagram />
          </SocialIcon>
        </Social>
        <Presence
          spotify={presence?.spotify}
          activity={presence?.activities.find((activity) => activity.type === 0)}
        />
        <CopyRight>&copy; Bernardo 2024</CopyRight>
      </Container>
    </>
  );
}
