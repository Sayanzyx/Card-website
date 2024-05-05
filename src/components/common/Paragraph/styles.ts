import styled from 'styled-components';

export const Container = styled.p`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.2rem;
  color: ${({ theme }) => theme.colors.textHover};
  margin: 1rem 0;

  strong {
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  span {
    display: inline-flex;
    align-items: center;

    color: ${({ theme }) => theme.colors.textHighlight};

    & > svg {
      width: 1rem;
      height: 1rem;
      margin-left: 4px;
      transform: translateY(-1px);
    }
  }

  a {
    display: inline-flex;
    align-items: center;

    color: ${({ theme }) => theme.colors.brand};
    text-decoration: none;

    & > svg {
      width: 1rem;
      height: 1rem;
      margin-left: 4px;
      transform: translateY(-1px);
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;
