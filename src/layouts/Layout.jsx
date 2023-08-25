import React from 'react'
import Navbar from './Navbar'
const Layout = (props) => {
  let { prop1, text, children } = props
  prop1()
  return (
    <>
      <Navbar/>
      {children}
      <p>{text}</p>
    </>
  )
}

export default Layout