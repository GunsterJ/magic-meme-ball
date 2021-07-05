import React, { useState } from 'react'

export const MemeContext = React.createContext({
   imageSrc : 'eightball'
})

export const MemeContextProvider = ({ children }) => {
   const [imageSrc, setimageSrc] = useState('eightball')
   return (
      <MemeContext.Provider value={[imageSrc, setimageSrc]}>{children}</MemeContext.Provider>
   )
}