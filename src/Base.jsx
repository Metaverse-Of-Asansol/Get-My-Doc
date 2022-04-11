import React from 'react'
import Navbar from './Components/Navbar'

const Base = ({children}) => {
  return (
    <>
        <Navbar/>
        <div>
            {children}
        </div>
        {/* <footer>
          This is the footer component
        </footer> */}
    </>
  )
}

export default Base