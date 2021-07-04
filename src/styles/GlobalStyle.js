import { createGlobalStyle }from 'styled-components'

const GlobalStyle = createGlobalStyle`

   body {
      all: unset;
      overflow-x: hidden;
   }

   html {
      --color-background: #95D7AE;
      --spacing-tiny: 6px;
      --spacing-small: 12px;
      --spacing-default: 36px;
      --spacing-large: 90px;
      --spacing-extraLarge: 180px;
   }

`

export default GlobalStyle