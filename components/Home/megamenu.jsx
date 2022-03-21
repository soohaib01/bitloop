import MegaStyles from '../../styles/MegaMenu/Mega.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDashboard,faFile} from '@fortawesome/free-solid-svg-icons'
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
                <div className={MegaStyles.ActualLinks}>
                    <span className={MegaStyles.Rounded}><FontAwesomeIcon
        icon={faDashboard}
        style={{ fontSize: 27, color: "white" }}
      />
   
      </span>
      <h3>Link here</h3>
                </div>
                <div className={MegaStyles.ActualLinks}>
                    <span className={MegaStyles.Rounded}><FontAwesomeIcon
        icon={faDashboard}
        style={{ fontSize: 27, color: "white" }}
      />
   
      </span>
      <h3>Link here</h3>
                </div>
                <div className={MegaStyles.ActualLinks}>
                    <span className={MegaStyles.Rounded}><FontAwesomeIcon
        icon={faDashboard}
        style={{ fontSize: 27, color: "white" }}
      />
   
      </span>
      <h3>Link here</h3>
                </div>
                <div className={MegaStyles.ActualLinks}>
                    <span className={MegaStyles.Rounded}><FontAwesomeIcon
        icon={faDashboard}
        style={{ fontSize: 27, color: "white" }}
      />
   
      </span>
      <h3>Link here</h3>
                </div>
            </div>
            </div>
            <div className={MegaStyles.RightBox}>
            <h2 className={MegaStyles.Heading}>The Key Features</h2>
            <div className={MegaStyles.OneLink}>
               <ul>
                   <li>Docs</li>
                   <li>Careers</li>
                   <li>About</li>
                   <li>Contact</li>
                   <li>Blogs</li>
               </ul>
            </div>
            </div>
           
        </div>
    </div>
  )
}

export default megamenu