import styled from 'styled-components';

export const Wrapper = styled.a`
  color: initial;
  text-decoration: none;
`;

export const Container = styled.div`
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  display: flex;
  color: ${({ theme }) => theme.colors.textHover};
  cursor: pointer;
  overflow: hidden;
  margin-bottom: 1rem;

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
    background-color: rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 0;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const TechIcon = styled.div`
  min-width: 64px;
  width: 64px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, color }) => color ?? theme.colors.brand};
  border-radius: 10px;
  margin-right: 12px;

  & > svg {
    width: 24px;
    height: 24px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    border-radius: 0;
    height: 32px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 1rem;
    align-items: center;
  }
`;

export const TechTitle = styled.h5`
  font-size: 1rem;
  line-height: 1.2rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  display: inline-flex;

  & > svg {
    height: 1rem;
  }
`;

export const TechTags = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const TechDescription = styled.p`
  font-size: 1rem;
  line-height: 1.2rem;
  margin-top: 4px;

  @media (max-width: 768px) {
    margin-top: 12px;
  }
`;
