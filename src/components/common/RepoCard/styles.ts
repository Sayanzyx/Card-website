import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  width: 100%;
  border-radius: 10px;
  padding: 1rem;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const RepoHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RepoName = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  & > svg {
    height: 0.875rem;
    display: inline-block;
    vertical-align: middle;
  }
`;

export const RepoDescription = styled.p`
  font-size: 0.875rem;
  line-height: 1.2rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const RepoFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;
`;

export const RepoDate = styled.span`
  font-size: 0.875rem;
  line-height: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const RepoInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const RepoInfoCounter = styled.div`
  padding: 0 6px;
  margin: 0 4px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 999px;
  font-size: 0.75rem;
  white-space: nowrap;
`;
