import { Global } from '@emotion/react';

const GlobalStyles = () => (
    <Global
      styles={`
        @font-face {
          font-family: 'RegardsRegular';
          src: url('./fonts/regards.otf') format('opentype'),
                url('./fonts/regards.ttf') format('truetype');
        }
        @font-face {
          font-family: 'Quasimoda';
          src:  url('/fonts/Quasimoda-Light.otf') format('opentype'),
                url('/fonts/Quasimoda-Light.ttf') format('truetype'),
                url('/fonts/Quasimoda-Light.woff') format('woff'),
                url('/fonts/Quasimoda-Light.woff2') format('woff2');
        }
        @font-face {
          font-family: 'CourierPrime';
          src: url('./fonts/CourierPrime-Italic.ttf') format('truetype');
        }
      `}
    />
  );
  
  export default GlobalStyles;