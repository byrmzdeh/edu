import React from 'react'
import BasketProvider from './context/BasketContext'

const MainLayoutContext = ({children}) => {
  return (
    <BasketProvider>
        {children}
    </BasketProvider>
  )
}

export default MainLayoutContext