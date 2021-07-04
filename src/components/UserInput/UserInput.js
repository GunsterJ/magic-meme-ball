import { Button, InputAdornment, TextField } from '@material-ui/core';

import React from 'react'

const UserInput = () => {
   return (
      <>
         <TextField 
            variant='outlined' 
            fullWidth
            label='Ask the magic meme ball a polar question' 
            InputProps={{
               startAdornment: <InputAdornment position="start">Oh, magic meme ball</InputAdornment>,
            }}
         />
         <Button variant='contained'>Get the answer</Button>
      </>
   )
}

export default UserInput