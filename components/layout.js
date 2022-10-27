import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = (props) => {
    return (
      <div style={{backgroundColor:"#030303"}}>
        <Navbar />
        <div className="h-screen">{props.children}</div>
        <Footer />
      </div>
  )
}

export default Layout
