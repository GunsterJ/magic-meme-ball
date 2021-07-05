import { Button, InputAdornment, TextField } from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react'

import { Container } from './userInput-styles'
import { MemeContext } from '../../context/context'

const UserInput = (props) => {
   
   const [imageSrc, setImageSrc] = useContext(MemeContext)

   const [meme, setMeme] = useState()

   useEffect(() => {
      fetch(`https://yesno.wtf/api`)
         .then(response => response.json())
         .then(resultData => {
            setMeme(resultData.image)
         }) 
   }, [imageSrc])

   return (
      <Container>
         <TextField 
            variant='outlined' 
            fullWidth
            label= { props.label }
            InputProps={{
               startAdornment: <InputAdornment position="start">{ props.adornment }</InputAdornment>,
            }}
         />
         <Button variant='contained' onClick={() => setImageSrc(meme)}>{ props.button }</Button>
      </Container>
   )
}

export default UserInput