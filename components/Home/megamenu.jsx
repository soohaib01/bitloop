import MegaStyles from '../../styles/MegaMenu/Mega.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDashboard,faFile} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
const megamenu = () => {
  return (
    <div className={MegaStyles.Main}>
        <div className={MegaStyles.Box}>
            <div className={MegaStyles.HalfBoxs}>
                <div className={MegaStyles.TopContent}>
                    <h2>The Bitloop Platform</h2>
                  <p>Explore How Its Works </p>
                </div>
                <div className={MegaStyles.TopBelow}>

            <p className={MegaStyles.JustContent}>
                <span className={MegaStyles.MakeBold}>Lorem ipsum dolor sit amet </span> Lorem ipsuestiae eum similique at, rem corporis facilis illum blanditiis consequatur reprehenderit id?</p>
                </div>
                <div className={MegaStyles.LinksWithBox}>
                <div className={MegaStyles.ActualLinks}
               
                >
                    <span className={MegaStyles.Rounded}
                    
                    ><FontAwesomeIcon
        icon={faDashboard}
        style={{ fontSize: 27, color: "white" }}
      />
   
      </span>
    <Link href="docs"><h3  
                style={{
                  marginRight:'1.6rem',
                }}>Docs</h3></Link>  
                </div>
                <div className={MegaStyles.ActualLinks}>
                    <span className={MegaStyles.Rounded}><FontAwesomeIcon
        icon={faDashboard}
        style={{ fontSize: 27, color: "white" }}
      />
   
      </span>
      <Link href="about"><h3>About us</h3></Link>  
                </div>
                <div className={MegaStyles.ActualLinks}>
                    <span className={MegaStyles.Rounded}><FontAwesomeIcon
        icon={faDashboard}
        style={{ fontSize: 27, color: "white" }}
      />
   
      </span>
      <Link href="career"><h3>Careers</h3></Link>  
                </div>
                <div className={MegaStyles.ActualLinks}>
                    <span className={MegaStyles.Rounded}><FontAwesomeIcon
        icon={faDashboard}
        style={{ fontSize: 27, color: "white" }}
      />
   
      </span>
      <Link href="contact"><h3 
       
       style={{
        marginRight:'6px',
      }}
      >Contact</h3></Link>  
                </div>
            </div>
            </div>
            <div className={MegaStyles.RightBox}>
            <h2 className={MegaStyles.Heading}>The Key Features</h2>
            <div className={MegaStyles.OneLink}>
               <ul key="id">
           
                <li><Link href="docs">Docs</Link></li>
                <li><Link href="career">Careers</Link></li>
                <li><Link href="about">About</Link></li>
                <li><Link href="contact">Contact</Link></li>
                <li><Link href="blogs">Blogs</Link></li>
                
               </ul>
            </div>
            </div>
           
        </div>
    </div>
  )
}

export default megamenu