import { Button, InputAdornment, TextField } from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react'

import { Container } from './userInput-styles'
import { MemeContext } from '../../context/context'

const UserInput = (props) => {
   
   const [imageSrc, setImageSrc] = useContext(MemeContext)
   const [value, setValue] = useState('')
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
            onChange={e => setValue(e.target.value)}
            InputProps={{
               startAdornment: <InputAdornment position="start">{ props.adornment }</InputAdornment>,
            }}
         />
         <Button variant='contained' onClick={() => setImageSrc(meme)} disabled={ value.length > 0 ? false : true }>{ props.button }</Button>
      </Container>
   )
}

export default UserInput