import NavStyle from '../styles/Mobilenav.module.css'
import { useState, useEffect } from 'react';
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars ,faXmark} from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'


const mobileNav = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      setRenderingSize(!renderingSize)
    }
    router.events.on('routeChangeStart', handleRouteChange)


    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [renderingSize , setRenderingSize] = useState(true)
    
 const handleClick = ()=>{
   setRenderingSize(!renderingSize)
 }
  return (
  
  <div style={{
    overflow:'hidden'
  }}>
   
  
    <div className={NavStyle.Holder} style={{
     transform:renderingSize ? 'translateX(-100%)' : 'translateX(0%)'
    }} id='holder'>
    <div className={NavStyle.Menu}>

     <ul>
       <li><Link href="/">Home</Link></li>
       <li><Link href="/reactBakend">React Backend</Link></li>
       <li><Link href="/LandingOne">Landing One</Link></li>
       <li><Link href="/about">About</Link></li>
       <li><Link href="/about">Link Another</Link></li>
       <li><Link href="/about">Link Three</Link></li>
       <li><Link href="/about">Link Four</Link></li>

      
  
     </ul>
     
    </div>

    </div>
    <div>
      <Link href="/">
      <img src="/logo.png" alt="Logo Place" className={NavStyle.Logo} style={{
        width:'200px',
        height:'50px',
        left:'5%',
        position:'absolute',
        top:'2%'
      }} />
      </Link>
      <button className={NavStyle.toggleBTn} onClick={handleClick}>
      <FontAwesomeIcon
        icon={renderingSize ? faBars : faXmark}
        style={{ fontSize: 35, color: "black" }}
      />
</button>    
    </div>
  </div>

  )
}



export default mobileNav;
