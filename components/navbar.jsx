import React from 'react'
import Image from 'next/image'
import Nav from '../styles/Nav.module.css'
import Link  from 'next/link'
import Mega from '../components/Home/megamenu'
import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import Head from 'next/head'
const navbar = () => {
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showMenu,setShowMenu] = useState(false);
  function HandleClick(){
    setShowMenu(!showMenu);
  }
  return (
   
    <div className={Nav.Container}>
      <Head>
    <title>Bitloop</title>
    <meta name="description" content="Generated 3Techno Digital" />
    <link rel="icon" href="/bitloopsfavioc.png" />
  </Head>
      <div className={Nav.mainContainer}>
    
          <img src='https://global-uploads.webflow.com/6183aca39d7d1eea0ba31f1f/6184bd8f4ed3b9dc15f317de_bitloops-logo_320x80.png'
        className={Nav.LogoContain}
        />
        <ul className={Nav.Listing}>
          <li><Link href="/">Home</Link></li>
          <li className={Nav.HoverShow} onClick={HandleClick}><Link href="#">Community</Link><FontAwesomeIcon
        icon={faChevronDown}
        style={{ fontSize: 12,marginLeft:8,cursor:'pointer', color: "black" }}
      /></li>
          <div 
          style={{
            display:showMenu ? 'block' : 'none',
            transition:'0.5s ease-in'
          }}
          className={Nav.FinalShow}
          >
          <Mega/>
          </div>
    
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/help">Help</Link></li>
        </ul>
      </div>
   
      <div className={Nav.RightContainer}>
      <ul className={Nav.Listing}>
  
          <li><Link href="https://github.com/bitloops/bitloops">Star us on Github</Link></li>
          
          <li><Link href="/">Sign In</Link></li>
        
          <button className={Nav.BtnStyleOne}>Start Project</button>
        </ul>
      </div>
    </div>
  )
}

export default navbar