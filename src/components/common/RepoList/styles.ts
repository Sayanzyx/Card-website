import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  max-width: 120ch;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;
