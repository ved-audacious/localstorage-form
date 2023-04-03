
import React from 'react'
import Example from '../components/header/mainCorousel'
import home from "./homepage.module.css"

const Homepage = () => {
  return (
    <div>
    <div className={home.bg}></div>
    <div>
    <Example/>
    </div>
    </div>
  )
}

export default Homepage
