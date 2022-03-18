import React from 'react'
import Image from 'next/image'
import Nav from '../styles/Nav.module.css'
import Link  from 'next/link'

const navbar = () => {
  return (
    <div className={Nav.Container}>
      <div className={Nav.mainContainer}>
          <img src='https://global-uploads.webflow.com/6183aca39d7d1eea0ba31f1f/6184bd8f4ed3b9dc15f317de_bitloops-logo_320x80.png'
        className={Nav.LogoContain}
        />
        <ul className={Nav.Listing}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/reactBakend">React Backend</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/LandingOne">Landing</Link></li>
          <li><Link href="/LandingOne">Landing Two</Link></li>
        </ul>
      </div>
      <div className={Nav.RightContainer}>
      <ul className={Nav.Listing}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/">React</Link></li>
          
          <li><Link href="/">Login</Link></li>
        
          <button className={Nav.BtnStyleOne}>Sign Up</button>
        </ul>
      </div>
    </div>
  )
}

export default navbar