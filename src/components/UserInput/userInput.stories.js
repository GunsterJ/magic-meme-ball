import React from 'react'
import UserInput from './UserInput'

export default {
  component: UserInput,
  title: 'UserInput'
}

export const Default = (args) => <UserInput {...args} />

Default.args = {
   label: 'This is for testing purposes',
   adornment: 'The question comes after this part,'
}