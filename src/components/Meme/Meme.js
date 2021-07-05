import React from 'react'
import { Wrapper } from './meme-styles'
import eightballGIF from '../../gifs/eightball.gif'

const Meme = () => {
   return (
      <Wrapper>
         <img src={eightballGIF} alt="Otter dancing with a fish" />
      </Wrapper>
   )
}

export default Meme