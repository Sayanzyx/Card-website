import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Hind Siliguri', sans-serif;
    color: ${({ theme }) => theme.colors.textPrimary};
    background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  }

  .tippy-box[data-theme~='custom-tooltip'] {
    background: #000;
    padding: 0 8px;
    border-radius: 4px;
    font-size: 1rem;
  }
`;
