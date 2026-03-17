import React, { StrictMode } from 'react'
import Auth from './Auth/index'
import { HelmetProvider } from 'react-helmet-async';
const App = () => {
  return (
    <StrictMode>
         <HelmetProvider>
          <Auth />
    </HelmetProvider>  
    </StrictMode>
 
  )
}
export default App