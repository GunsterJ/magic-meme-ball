import { device } from '../../styles/breakpoints.js'
import styled from 'styled-components'

const Container= styled.div`

   display: grid;

   @media ${device.desktop} { 
      grid-template-columns: 7fr 1fr;
      padding: var(--spacing-small) var(--spacing-large);
      grid-gap:var(--spacing-default);
      > div {
         grid-column: 1 / 2;
      }
      > button {
         grid-column: 2 / 3;
      }
   }

   @media ${device.laptop} { 
      grid-template-columns: 5fr 1.5fr;
      padding: var(--spacing-small) var(--spacing-large);
      grid-gap:var(--spacing-default);
      > div {
         grid-column: 1 / 2;
      }
      > button {
         grid-column: 2 / 3;
      }
   }

   @media ${device.tablet} { 
      grid-template-columns: auto 200px;
      padding: var(--spacing-small) var(--spacing-default);
      grid-gap:var(--spacing-small);
      > div {
         grid-column: 1 / 2;
      }
      > button {
         grid-column: 2 / 3;
      }
   }

   @media ${device.mobile} { 
      grid-template-columns: 1fr;
      padding: var(--spacing-small) var(--spacing-default);
      grid-gap:var(--spacing-small);
      > div {
         grid-column: 1 / 2;
      }
      > button {
         grid-column: 1 / 2;
      }
   }

`

export { Container }