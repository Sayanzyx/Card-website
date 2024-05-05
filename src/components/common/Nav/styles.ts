import { motion } from 'framer-motion';
import { transparentize } from 'polished';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.aside<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 15rem;
  height: 100vh;
  padding: 2rem 2rem 1rem 2rem;
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? 'flex' : 'none')};
    width: 100%;
    background-color: ${({ theme }) => transparentize(0.2, theme.colors.backgroundPrimary)};
    backdrop-filter: blur(6px);
    z-index: 1;
    top: 64px;
    height: calc(100vh - 64px);
  }
`;

export const MobileHeader = styled.div<{ open: boolean }>`
  width: 100%;
  height: 64px;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ open, theme }) =>
    open ? transparentize(0.2, theme.colors.backgroundPrimary) : theme.colors.backgroundPrimary};
  backdrop-filter: ${({ open }) => (open ? 'blur(6px)' : 'none')};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  z-index: 1;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileMenuIcon = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & > svg {
    fill: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const Title = styled.div`
  font-weight: 600;
`;

export const Status = styled.span`
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const StatusCircle = styled.div`
  height: 0.875rem;
  width: 0.875rem;
  background-color: ${({ color, theme }) => color ?? theme.colors.brand};
  border-radius: 100%;
  margin-right: 8px;
  transform: translateY(-1px);
`;

export const Menu = styled.nav`
  display: block;
`;

export const Page = styled(Link)<{ active: number }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  line-height: 1.2rem;
  color: ${({ active, theme }) => (active ? theme.colors.textPrimary : theme.colors.textHover)};
  cursor: pointer;
  padding: 10px 0;
  user-select: none;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const Icon = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;

  & > svg {
    fill: ${({ theme }) => theme.colors.textPrimary};
    margin-left: auto;
    user-select: none;
    width: 1rem;
    height: 1rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin-top: auto;
  padding: 1rem 0;
`;

export const SocialIcon = styled.a`
  text-decoration: none;

  & > svg {
    stroke: ${({ theme }) => theme.colors.textHover};
    width: 1.4rem;
    height: 1.4rem;
    cursor: pointer;
  }

  &:hover > svg {
    stroke: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const CopyRight = styled.div`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
  padding: 10px 0;
  margin-bottom: -1rem;
  margin-left: -2rem;
  width: calc(100% + 4rem);
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;
