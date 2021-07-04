import { Button, InputAdornment, TextField } from '@material-ui/core'

import { Container } from './userInput-styles'
import React from 'react'

const UserInput = () => {
   return (
      <Container>
         <TextField 
            variant='outlined' 
            fullWidth
            label='Ask the magic meme ball a polar question' 
            InputProps={{
               startAdornment: <InputAdornment position="start">Oh, magic meme ball</InputAdornment>,
            }}
         />
         <Button variant='contained'>Get the answer</Button>
      </Container>
   )
}

export default UserInput