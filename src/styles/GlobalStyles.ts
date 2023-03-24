import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color-base: #f7f0f6;
    --secondary-color-base: #1C4670;
    --background-color-base: #EAEAE0;
    --font-color-base: #222;
    --font-base: 'Inter', sans-serif;
    
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font-base);
  }
`;

export default GlobalStyles;
