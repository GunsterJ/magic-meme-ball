import { MemeContextProvider } from './src/context/context'
import React from 'react'

export const wrapRootElement = ({ element }) => (
  <MemeContextProvider>{ element }</MemeContextProvider>
)