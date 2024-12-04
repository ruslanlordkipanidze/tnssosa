import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono:wght@400;700&display=swap');

  :root {
    --primary-color: #000000;
    --primary-hover: #000000;
    --background: #13131a;
    --card-background: #1a1a1a;
    --text-primary: #000000;
    --text-secondary: #000000;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Ubuntu Mono', monospace;
  }

  html {
    height: 100%;
    min-height: 100vh;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    background-image: url('/assets/images/background.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    min-height: 100vh;
    width: 100%;
    font-family: 'Ubuntu Mono', monospace;
    overflow-x: hidden;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  #root {
    min-height: 100vh;
    width: 100%;
    position: absolute;
    z-index: 1;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }

  @media (max-width: 768px) {
    body {
      padding-top: 80px;
      background-size: auto 100vh;
      background-position: top center;
    }
  }

  @media (orientation: landscape) and (max-width: 1024px) {
    body {
      background-size: 100vw auto;
    }
  }

  button {
    font-family: inherit;
  }

  /* Стили для скроллбара */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--background);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--primary-color);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--primary-hover);
  }
`;

export default GlobalStyles; 