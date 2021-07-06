import React, { useContext } from 'react'

import { MemeContext } from '../../context/context'
import { Wrapper } from './meme-styles'
import eightballGIF from '../../gifs/eightball.gif'

const Meme = () => {

   const [ imageSrc ] = useContext(MemeContext)

   return (
      <Wrapper>
         { imageSrc === 'eightball' || imageSrc === undefined ? <img src={ eightballGIF }/> : <img src={ imageSrc }/> }
      </Wrapper>
   )
}

export default Meme