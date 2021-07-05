import { device } from '../../styles/breakpoints.js'
import styled from 'styled-components'

const Wrapper = styled.div`

   display: grid;
   place-content: center;

   @media ${device.desktop} { 
      padding: var(--spacing-large) 0;
   }

   @media ${device.laptop} { 
      padding: var(--spacing-default) 0;
   }

   @media ${device.tablet} { 
      padding: var(--spacing-default) 0;
   }

   @media ${device.mobile} { 
      padding: var(--spacing-large) 0;
   }

`

export { Wrapper }