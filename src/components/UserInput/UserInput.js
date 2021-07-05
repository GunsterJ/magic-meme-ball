import { Button, InputAdornment, TextField } from '@material-ui/core'

import { Container } from './userInput-styles'
import React from 'react'

const UserInput = (props) => {
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
         <Button variant='contained'>Get the answer</Button>
      </Container>
   )
}

export default UserInput