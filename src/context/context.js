import React, { useState } from 'react'

export const MemeContext = React.createContext({
   imageSrc : 'eightball'
})

export const MemeContextProvider = ({ children }) => {
   const [imageSrc, setImageSrc] = useState('eightball')
   return (
      <MemeContext.Provider value={[imageSrc, setImageSrc]}>{children}</MemeContext.Provider>
   )
}