import NavStyle from '../styles/Mobilenav.module.css'
import { useState, useEffect } from 'react';
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'



const mobileNav = () => {



  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [renderingSize, setRenderingSize] = useState(true)

  const handleClick = () => {
    setRenderingSize(!renderingSize)
  }
  return (

    <div style={{
      overflow: 'hidden'
    }}>


      <div className={NavStyle.Holder} style={{
        transform: renderingSize ? 'translateX(-100%)' : 'translateX(0%)'
      }}>
        <div className={NavStyle.Menu}>
          <div className={NavStyle.CutBtn}>
            <button className={NavStyle.toggleBTn} onClick={handleClick}>
              <FontAwesomeIcon
                icon={faXmark}
                style={{ fontSize: 35, color: "black", zIndex: '10000', }}
                className={NavStyle.CutBtn}
              />
            </button>
          </div>
          <ul>
            <li onClick={handleClick}><Link href="/">Home</Link></li>
            <li onClick={handleClick}><Link href="/reactBakend">Community</Link></li>
            <li onClick={handleClick}><Link href="/LandingOne">Landing One</Link></li>
            <li onClick={handleClick}><Link href="/about">About</Link></li>
            <li onClick={handleClick}><Link href="/about">Contact</Link></li>
          </ul>

        </div>

      </div>
      <div className={NavStyle.makeBoxFlex}>
        {/* eslint-disable-next-line @next/next/link-passhref */}
        <Link href="">
          <img src="/logo.png" alt="Logo Place" className={NavStyle.Logo} />
        </Link>

        <button className={NavStyle.toggleBTn} onClick={handleClick}>
          <FontAwesomeIcon
            icon={faBars}
            style={{ fontSize: 35, color: "black", zIndex: '10000', }}
          />
        </button>
      </div>

    </div>

  )
}



export default mobileNav;
